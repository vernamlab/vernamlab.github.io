# System scope and known boundaries

Understanding what BEAST **does not** automate is essential for safe use.

| Feature | What is implemented | Boundary |
| --- | --- | --- |
| Student request intake | Ticketed Google Form and request tracker | Form submission is not hardware authorization. |
| Advisor review | Per-request Approved/Declined decision | Advisor approval alone does not create a reservation. |
| Automatic booking | Eligible advisor-approved, nonexclusive requests | Requires a valid future window and live feasible Panel allocation. |
| Priority | Security-specific requests are ranked before routine requests for **new** bookings | No automatic preemption or guaranteed immediate allocation. |
| Entire-machine security work | Manual administrator review and Panel allocation | Never part of the ordinary auto-booking feed. |
| Special environment needs | Captured as additional request information | Can block unattended booking and require administrator action. |
| Queue revision/cancellation | Student can edit or cancel eligible, unallocated approved tickets | Does not apply before advisor approval, to manual entire-machine tickets, or after Panel booking. |
| Provisional alternatives | Capacity-checked suggestions, including future windows | A proposal is not a reservation; student acceptance and revalidation are needed. |
| Monitoring | Email-specific reservations, queue state, Panel observations, history | Not a forensic guarantee of which process or experiment ran. |
| Alerts | Student email, manual-review Slack, Panel operational Slack | Separate cycles can cause delays; message delivery is not guaranteed. |
| Panel reservation | Stores GPU IDs, CPU, RAM, dates, student email, ticket | Does not create accounts, launch jobs, enforce isolation, or automatically stop a policy violation. |
| Confidential GPU VM | H200 GPU execution inside the TDX VM via BEAST host; user VM login is separate | `sudo` is shared; an idle GPU, `CUDA_VISIBLE_DEVICES`, or the reservation record does not technically isolate jobs or data. |

## Important state distinctions

**Request → advisor approval → scheduling evaluation → Panel reservation → permitted run.** These are separate steps. No step should be inferred simply because the previous step succeeded. If email and Panel status disagree, the administrator should inspect the Panel reservation and the corresponding tracker record.

## Areas to verify before relying on them

- Do not assume that a blank schedule means all GPUs, CPU, or RAM are physically available.
- Do not assume that a proposed alternative will remain available when accepted.
- Do not assume that a Panel reservation proves there are no background system processes during a side-channel experiment.
- Do not assume that every security request requires manual approval: only **Security + Entire machine** is automatically excluded by that policy rule. Other special requirements can independently block unattended booking.
- Do not assume the scheduler can cancel, extend, start, stop, or attribute user processes.
- Do not assume the administrative tracker is public or that external email automatically grants server access.
