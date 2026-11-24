# Administrative workflow (nontechnical overview)

This page describes what administrators do, not server configuration or private integration details. Students should use the [student guide](students.md).

## Division of responsibilities

| Component | Operational role |
| --- | --- |
| **BEAST GPU Research Request Form / student request app** | Collects the request and acknowledgments; creates the tracker record and ticket. |
| **GPU_Request_Tracker Google Sheet** | Authoritative record for request identity, advisor approval, requested scope, and administrative decision. |
| **BEAST Scheduler Gateway** | Exposes eligible requests to BEAST and records provisional scheduling feedback in **Scheduler Results**. |
| **BEAST-hosted production scheduler** | Validates eligibility and current Panel capacity; creates eligible reservations through the Panel. |
| **BEAST GPU Panel** | Authoritative reservation calendar and administrative allocation interface. |
| **BEAST GPU Monitoring** | Student-specific status, queue actions, historical reservations, and allocation/lifecycle notifications. |
| **Slack notifications** | Manual-action alerts from BEAST GPU Requests and separate operational notices from the local Panel. |

## Ordinary automatically scheduled requests

Once the advisor approves, **Light**, **Standard**, **Intensive**, and **Security + Specific allocation** can proceed without a second manual administrator approval. The BEAST worker must still pass request validation and allocate a **fixed future** time and feasible resources. A successful Panel reservation is the definitive allocation record.

Check exceptions rather than manually approving every ordinary ticket. In particular, do not create an extra Panel reservation for a ticket that the scheduler has already booked.

## Exclusive-machine and exceptional work

For **Security / Side-Channel + Entire machine**, review the advisor-approved ticket after the BEAST GPU Requests Slack alert. Inspect the proposed experiment, isolation requirements, existing workloads, and impact on other users. Make the administrative decision in the tracker and, if approved, create the correct **exclusive** reservation in the Panel. Include the ticket ID and the student's correct email address so Monitoring can associate the allocation with the original request.

Specialized software/host/VM requirements can also block unattended booking even for otherwise routine profiles. These cases may surface as correction/validation feedback rather than an automatic admin Slack alert; coordinate the requirement directly with the student and advisor.

## Avoid booking duplicates

- Confirm the ticket does not already have a Panel reservation before creating one manually.
- If Google says a claim is in progress, or Panel and Google statuses disagree, reconcile the existing ticket rather than resubmitting or creating a second reservation.
- A scheduler-proposed GPU assignment or alternative window is **not** a booked allocation.
- If an administrator cancels a booked request, update the **actual Panel reservation** and the associated request status. Cancelling the Google queue entry alone does not release Panel resources.

## Notifications and communications

Enter **Student email** into each manual Panel reservation. The bridge sends Panel observations to Monitoring on an independent cycle; reservations may appear in Slack before student emails or the Monitoring page refresh. Verify the student's address and Panel state if the expected notice does not arrive.

Advisor and student emails continue for routine requests; the **BEAST GPU Requests** Slack channel is reserved for manual entire-machine review after advisor approval and critical notification failures. The local Panel's operational Slack messages are independent.

## VM access and maintenance

All eight H200 GPUs are inside the shared confidential GPU VM; the BEAST host is the access gateway. The [VM instructions](vm-access.md) describe user login, storage, GPU readiness, and pinned NVIDIA components. VM-wide `sudo` availability must not be interpreted as authorization for users to change shared GPU services. Reserve administrator-controlled maintenance and service restarts; coordinate affected reservations and user workloads before taking the VM offline.

## Access, escalation, and accountability

Do not give students admin Panel privileges as a workaround for the queue. Grant server OS access separately under lab access controls, including for eligible external researchers. Keep the tracker permissions restricted and correct inaccurate entries without rewriting the history of a request. Administrative actions should remain attributable to the ticket and actual Panel reservation.

**Not in scope:** this user-facing documentation does not explain webhook secrets, GitHub deployment credentials, privileged commands, or infrastructure recovery procedures.
