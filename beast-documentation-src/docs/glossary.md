# Glossary

| Term | Meaning |
| --- | --- |
| **Ticket (GPU-####)** | Unique identifier for a submitted job or defined experiment batch. |
| **Request** | Proposed project, resource combination, and time recorded in the Google tracker. |
| **Advisor approval** | Advisor's support for a specific request; not a reservation. |
| **Admin decision** | Administrator handling in the tracker, required for manual exceptions. |
| **GPU Panel** | Administrative application that creates and stores actual reservations. |
| **Scheduler** | BEAST worker that evaluates and books eligible advisor-approved requests. |
| **Scheduler Gateway** | Google-side interface to eligible requests and queue feedback. |
| **Scheduler Results** | Google tracker tab for capacity feedback and queue status. |
| **Allocation** | Panel-confirmed assignment of GPU IDs, CPU, RAM, and a specified time. |
| **Queue** | Unallocated advisor-approved requests awaiting a feasible booking. |
| **Provisional alternative** | A suggested resource/window combination that is not reserved. |
| **Exclusive reservation** | Administrative commitment to avoid competing use of the entire machine during an approved experiment. |
| **Revision** | Permitted change to an unallocated ticket while retaining original approval limits. |
| **Student email** | Email address stored with the Panel reservation for Monitoring notices. |
| **Status link** | Private, time-limited emailed link to view Monitoring data and eligible queue actions. |
| **vCPU** | Virtual CPU allocation requested for the reserved environment. |
| **BEAST host** | `beast.wpi.edu`, the first SSH hop and administrative gateway; H200 compute workloads run inside the confidential GPU VM. |
| **Confidential GPU VM** | Shared Intel TDX / NVIDIA Protected PCIe virtual machine containing all eight H200 GPUs. A VM login is separate from the BEAST host login. |
| **GPU readiness** | NVIDIA confidential-computing state reported by the VM; `not-ready` requires administrator attention. |
| **CUDA_VISIBLE_DEVICES** | Controls which GPU IDs a particular process can see; not an isolation or authorization mechanism. |
| **GiB** | Gibibyte, 1,073,741,824 bytes; RAM amount is shown in binary units. |
| **Eastern Time** | America/New_York local time, observing seasonal daylight-saving changes. |
