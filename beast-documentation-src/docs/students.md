# Student quick start

## 1. Prepare one request per job or defined batch

Before submitting, agree with your advisor on the project, workload, intended time window, and the resources you actually need. A request must describe a **specific job or defined experiment batch**, rather than indefinite access for an entire project. **You may request several future slots in advance**, with a separate ticket for each slot or defined batch. An advisor can review these tickets together, but must approve each one. This encourages advance planning and reduces last-minute requests.

Choose a [workload profile](resources.md), provide your name, email, advisor and advisor email, explain the purpose, specify the start and end in Eastern Time, and acknowledge the usage policy. A BEAST Linux username is **not required to request a reservation**; server account access is a separate process.

Authorized external collaborators may submit a valid non-WPI email address, subject to lab eligibility and access requirements. Use an inbox you control; reservation and private-status notices are delivered there.

## 2. Submit and retain the ticket

Use the lab's current **BEAST GPU Research Request** link. The system records the request in the Google tracker, assigns a `GPU-####` ticket ID, and sends a receipt. Keep the ID for follow-up. Submitting twice normally creates two distinct requests: it is **not** a way to edit the first one.

The advisor receives an approval request containing the ticket and a link to the relevant tracker entry. Some web-form submissions may take a short period to appear in the tracker.

## 3. Obtain advisor approval

The advisor must select **Approved** in the *Approved by Advisor* field. They can also decline a request. A student’s acknowledgement that a discussion took place is not itself advisor approval.

For **Light, Standard, Intensive**, and **Security + Specific allocation**, a valid advisor-approved request can enter automatic scheduling. For **Security + Entire machine**, an administrator must review and allocate the reservation manually after advisor approval.

## 4. Wait for a confirmed reservation

The BEAST scheduler normally checks eligible requests at approximately five-minute intervals. It considers requested GPUs, vCPUs, RAM, overlap with other reservations, hardware availability, and the selected window. Security-specific allocations receive priority for new bookings. A request may remain queued if a safe allocation cannot be made.

**Do not start work because the advisor approved, the schedule looks free, or you received a submission receipt.** Wait for the reservation confirmation associated with the Panel and its start time.

## 5. Track the booking and complete the work

Open [BEAST GPU Monitoring](https://script.google.com/macros/s/AKfycbzWCH2o4QhGxlCdeSqQLAMZqZ5Phn-M8Zh_xGp0HmbXjMccgReamnvSoiNozLkYTs4/exec). Enter the same email address you used in your request and click **Email my status link**. Follow the private link to see eligible pending requests and your current/upcoming and historical Panel reservations.

Connect to the [confidential GPU VM](vm-access.md) through the BEAST host; all eight H200 GPUs are inside the VM, not directly on the host. Confirm the GPU readiness state and use the GPU IDs assigned to your reservation. An idle GPU shown by `nvidia-smi` is not a substitute for a confirmed reservation.

Run only the approved work, within the assigned resources and period. Stop when your slot ends, save results elsewhere, and inform the administrator if you must change an already allocated reservation. A Panel booking does not automatically create your Linux account or launch your job.

## If something changes

| Situation | Student action |
| --- | --- |
| No resources are available | Stay queued, or use Monitoring to modify a still-unallocated eligible request. |
| Your requested start has passed | Review provisional new windows; explicitly request a future window before any booking can occur. |
| You need fewer resources or a different time | Use Monitoring while your advisor-approved request is still eligible and unallocated. Changes must remain within the original approval limits. |
| You need more resources or a different project | Submit a new request and obtain fresh advisor approval. Cancel the earlier unallocated ticket if it is no longer needed. |
| Your request is awaiting advisor approval | Contact the advisor for the decision; cancellation at this stage requires administrator help. |
| Your reservation is already in the Panel | Contact the administrator to cancel, extend, or modify it. The queue cancellation control does not delete a Panel booking. |

See [Queue and changes](queue.md) and [Cancellation](cancellation.md) for precise conditions.
