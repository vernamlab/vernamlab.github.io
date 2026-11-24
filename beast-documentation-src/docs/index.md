# Welcome to BEAST

**BEAST GPU Research System** is Vernam Lab's shared reservation, scheduling, and monitoring service for research computing. It coordinates access to eight NVIDIA H200 GPUs running inside a shared Intel TDX confidential VM, and supports both general-purpose computation and specialized security experiments.

The system connects a **student request form**, an **advisor approval step**, the **Google request tracker**, a **BEAST-hosted scheduler**, an **administrative GPU Panel**, and a **student Monitoring portal**. Most eligible requests can be scheduled automatically after advisor approval. Requests requiring exclusive use of the entire machine are reviewed and allocated by administrators.

## Why we use a request and approval system

BEAST is shared research infrastructure with competing resource demands and experiments that can affect one another. Giving students direct control of the administrative GPU Panel could cause conflicting reservations, disruptive configuration changes, failed measurements, or damage to shared resources. A recorded request and advisor review for **each reservation** make the intended job, time, resources, and risks explicit, while allowing authorized external collaborators to request access without administrative privileges. **Students may submit multiple future time slots, and advisors can review and approve those separate requests in one sitting.** Planning experiments ahead helps students manage their time, coordinate resources, and develop professional planning skills. Routine advisor-approved requests are then scheduled automatically when feasible, reducing delays without surrendering accountability or safety.

## Start here

| Audience or task | Where to begin |
| --- | --- |
| **Students**: submit, receive approval, and use a confirmed allocation | [Student quick start](students.md) |
| **Research advisors**: review the job and resource scope | [Advisor guide](advisors.md) |
| **Choosing resources**: compare presets and security options | [Resource profiles](resources.md) |
| **Connecting to GPUs**: host login, VM access, data storage, CUDA and house rules | [Confidential GPU VM](vm-access.md) |
| **Tracking a request**: queue, changes, emails, and status | [Scheduling](queue.md) and [Monitoring](monitoring.md) |

## Essential distinction

**The GPUs are not directly available on the BEAST host.** Users connect through the host to the confidential VM, subject to a separate VM account. See [VM access and house rules](vm-access.md).

**Submitting a request is not a reservation.** An advisor-approved request is eligible for scheduling, but the student must wait until the **GPU Panel confirms a reservation** before using the allocated resources. The Panel creates reservations; it does not automatically start jobs, enforce process isolation, or provision a server account.

## System links

| Destination | Who uses it | Access |
| --- | --- | --- |
| **BEAST GPU Research Request** | Students and external approved researchers | Obtain the current Form or request-web-app URL from the lab or advisor. |
| [BEAST GPU Monitoring](https://script.google.com/macros/s/AKfycbzWCH2o4QhGxlCdeSqQLAMZqZ5Phn-M8Zh_xGp0HmbXjMccgReamnvSoiNozLkYTs4/exec) | Students | Enter the request email address to receive a private status link. |
| [BEAST GPU Panel](https://beast.wpi.edu:8443/) | Authorized administrators | Administrative reservation and resource view; not a student self-booking interface. |
| **GPU_Request_Tracker** | Advisors and administrators | Google Sheet access is granted by the lab; request rows are not public. |
| **BEAST confidential GPU VM** | Approved users with VM accounts | Access through `beast.wpi.edu`, not by attempting to run GPU jobs on the host. See [VM login instructions](vm-access.md). |

*Times shown in the request workflow are in America/New_York (Eastern Time).*

---

**Document scope:** User, advisor, and administrator workflows implemented as of **November 24, 2026**. Read [Known boundaries](limitations.md) for features that should not be assumed to exist.
