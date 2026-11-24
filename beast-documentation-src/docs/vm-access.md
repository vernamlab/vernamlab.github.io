# Beast Confidential GPU VM

> **Reservation and safety rules apply inside the VM.** The administrator-authored note below is reproduced with its wording preserved, except that its two temporary-password values have been redacted. Obtain the initial password privately from a BEAST administrator. Never share or commit credentials.
>
> **A visible or idle GPU is not permission to run a job.** A Panel-confirmed reservation is required. `CUDA_VISIBLE_DEVICES` is not an access-control boundary.
>
> **Technical `sudo` access does not authorize shared-system changes.** Driver, kernel, attestation, GPU services, and reboots require explicit administrator approval, even when the note only mentions warning other users.
>
> **Shared `sudo` access limits file confidentiality.** Do not rely on `/data/<username>` permissions to protect sensitive data from other privileged VM users.

All 8 H200 GPUs on **beast** now run inside a confidential VM using **Intel TDX with NVIDIA Protected PCIe**.  
Do your GPU work **inside the VM**. The GPUs are no longer available directly on `beast`.

## **Log in**

The VM is reachable only through `beast` (beast.wpi.edu), so you sign in twice:

1. First to `beast`
2. Then to the confidential VM

**Temporary password for VM:** `[obtain privately from a BEAST administrator]`  
Password logins to `beast` work only from the **WPI network or WPI VPN**. SSH keys work from anywhere.

### **Option A:**

Log in to `beast` as usual, then connect to the VM:

```bash
ssh -p 10022 <username>@localhost
```

### **Option B: One command from your system**

This asks first for your `beast` password and then for your VM password:

```bash
ssh -J <username>@beast.wpi.edu -p 10022 <username>@localhost
```

### **Optional SSH shortcut**

Add the following to `~/.ssh/config` on your system:

```sshconfig
Host beast-cc
    HostName localhost
    Port 10022
    User <username>
    ProxyJump <username>@beast.wpi.edu
```

## **Your account and storage**

Your VM account is separate from your `beast` account.  
You receive a starting password from the administrator, and the VM requires you to choose a new password at first login.  
**Temporary password for VM:** `[obtain privately from a BEAST administrator]`  
To change your password later, run:

```bash
passwd
```

### **sudo**

Everyone has `sudo` access inside the VM, so you can install software using tools such as:

- `apt`
- `pip`

Be careful: system-level changes may affect everyone sharing the VM.

### **Your data**

Keep models, datasets, checkpoints, and other large files under:

```
/data/<username>
```

This is stored on the VM's shared **4 TB disk**.  
Other users cannot access your directory without `sudo`.  
The VM's system disk, including your home directory, is relatively small, so avoid storing large models or datasets there.

### **Internet access**

The VM can access the internet for downloads such as:

- `pip`
- Hugging Face
- `apt`

Traffic goes through `beast`'s **1 Gb/s network connection**.

## **Using the GPUs**

The VM contains:

- **8× NVIDIA H200 GPUs**
- **141 GB memory per GPU**
- Full **NVLink connectivity** between GPUs
- NVIDIA driver **610.57.04**
- CUDA driver support for **CUDA 13.3**

Check GPU status with:

```bash
nvidia-smi
nvidia-smi conf-compute -grs
```

The second command must report:

```
ready
```

CUDA works only after the GPUs enter the `ready` state.  
At every VM boot, the system performs NVIDIA GPU firmware attestation. The GPUs are marked ready after attestation succeeds, usually a few minutes after the VM starts.  
If the GPUs remain in:

```
not-ready
```

contact the administrator.

### **Python environment**

No CUDA toolkit is installed system-wide.  
Most Python ML frameworks provide the CUDA libraries they need, so using a virtual environment is usually sufficient.  
For example:

```bash
python3 -m venv /data/$USER/venv
source /data/$USER/venv/bin/activate

pip install torch

python -c "import torch; print(torch.cuda.device_count())"
```

The expected output is:

```
8
```

### **Sharing GPUs**

The GPUs are shared among users.  
Before starting a job, check GPU utilization with:

```bash
nvidia-smi
```

Then select available GPUs using `CUDA_VISIBLE_DEVICES`.  
For example:

```bash
CUDA_VISIBLE_DEVICES=0,1 python train.py
```

This makes GPUs `0` and `1` visible to the process.

## **House rules**

The confidential GPU setup is fragile. A system-level change by one user can break GPU access for everyone.  
Please **do not**:

- Upgrade, remove, or reinstall NVIDIA packages, including:
    - NVIDIA driver
    - `nvidia-fabricmanager`
    - `libnvidia-nscq`

These packages are intentionally pinned to version **610.57.04**.

- Install a different Linux kernel.
- Install packages that pull in `nvidia-dkms`.  
  The VM uses **Secure Boot**, so self-built NVIDIA driver modules will not load.
- Stop or restart:
    - `nvidia-fabricmanager`
    - `nvidia-persistenced`
    - `ppcie-attest`
- Reboot or shut down the VM without warning everyone first.

A VM restart stops **all running jobs** and takes approximately **5–6 minutes** before the GPUs become usable again.  
Save checkpoints regularly under:

```
/data/<username>
```

so that a VM restart does not cost you an entire run.
