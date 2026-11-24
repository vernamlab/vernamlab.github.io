# Scheduling, queue, and request changes

## How automatic scheduling works

After advisor approval, eligible requests are checked by a BEAST-hosted scheduler at roughly **five-minute intervals**. It considers overlapping Panel reservations, the requested GPU **count** and available GPU IDs, vCPUs, system RAM, time, current resource telemetry, and request validity. Up to two successful bookings are processed in a cycle; additional eligible requests can be considered on later cycles. Availability shown in the tracker is advisory until the Panel accepts the reservation. Booking does not start a job or set OS-level limits inside the shared GPU VM.

The queue is **not a guaranteed first-in, first-out list**. Security-specific allocations are considered before routine jobs for **new bookings**, subject to availability and existing reservations. The system does not automatically preempt running jobs.

## What each status means

| Status shown or reported | Meaning | What to do |
| --- | --- | --- |
| **Pending advisor** | No recorded advisor approval yet | Ask the advisor to review the original request. |
| **Awaiting scheduler** | Eligible or being evaluated; no confirmed allocation yet | Wait for the next poll; do not run. |
| **Queued** | Resources or capacity unavailable for the requested combination/window | Stay queued or adjust within approved limits. |
| **Reschedule required** | The original window has passed without allocation | Request a definite future window. |
| **Needs correction** | A validation, requirement, or policy issue prevents booking | Review the feedback and contact administrators if the portal cannot resolve it. |
| **Allocated / Scheduled** | A Panel reservation was created | Check the assigned resources/time and watch for Monitoring confirmation. |
| **Manual review** | An exclusive-machine request or other exception | Wait for administrator handling. |
| **Cancelled** | Request withdrawn or reservation cancelled | Do not run under that ticket. |
| **Completed / expired** | Booking ended or is historical | A further job needs its own authorized request. |

Names may differ slightly between the Google Sheet, scheduling feedback, and Monitoring. **Panel-confirmed booking details take precedence over provisional suggestions.**

## When no resources are available

A queued request is **not rejected automatically**. BEAST records the reason where possible and can show provisional alternative times, suggested GPU IDs, or a reduced resource configuration. These suggestions do **not** create a reservation or guarantee availability.

You can:

1. **Remain in queue** without taking action.
2. **Request another time** suggested by the system or select a future time yourself.
3. **Reduce resources** where feasible, or shorten the duration within the original advisor-approved limits.
4. **Cancel** the unallocated ticket if it is no longer needed.

A student edit is rechecked by BEAST. A proposed time never becomes automatically approved merely because it was displayed. The current system cannot retroactively book an expired requested window.

## Which edits retain advisor approval?

For an eligible, unallocated request, Monitoring allows new windows and **no greater than** the originally approved GPU/vCPU/RAM limits, with **no longer than** the original duration. The project, advisor, profile, and security scope must remain consistent. These controls prevent a queue edit from changing the substance of the advisor's approval.

If a job needs **more resources**, a **longer duration**, a **different project**, or different security conditions, submit a new request for review. A new Form response creates a new ticket; cancel the obsolete unallocated request to avoid duplicated demand.

## When edits are unavailable

Monitoring edits require a fresh private status link and an eligible, advisor-approved, **unallocated** automatic-scheduling request. Edits are not offered before advisor approval, for manual entire-machine requests, during an in-progress booking claim, or after a Panel reservation exists. Use [Cancellation and changes](cancellation.md) for the correct escalation.

## Important limitations

- The scheduler cannot promise immediate access, fair-share quotas, job start, Linux account creation, or automatic preemption.
- It books only when a new fixed future window remains valid and resources are feasible at the time of booking.
- An existing Panel reservation or ambiguous duplicate ticket must be reconciled, not booked again automatically.
- Scheduler feedback may arrive before Monitoring refreshes; allow time for the independent synchronization cycle.
