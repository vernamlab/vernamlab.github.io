# How the BEAST system fits together

BEAST separates **requests and approvals** from **hardware reservation**, and separates **administrative booking** from **student monitoring**. All eight H200 GPUs are accessed through the [confidential GPU VM](vm-access.md), not directly on the host.

| System | What it means to users |
| --- | --- |
| **Student request Form / web app** | A single entry point for job details and policy acknowledgments. |
| **Google Sheet: GPU Requests** | Request history, advisor decisions, and administrative review. Header labels are managed by the system. |
| **Google Sheet: Scheduler Results** | Scheduling and queue feedback without changing the submitted request record. |
| **BEAST Scheduler Gateway** | Connects Google request/feedback data to the BEAST worker. |
| **BEAST production scheduler** | Periodically checks the live Panel and books eligible future reservations. |
| **GPU Panel** | Authoritative reservation calendar, allocations, and administrative actions. |
| **Confidential GPU VM** | The shared execution environment for approved GPU jobs, accessed by two-stage SSH through BEAST; accounts are separate from reservations. |
| **BEAST GPU Monitoring** | Student-specific views and permitted queue changes, plus reservation/lifecycle email notifications. |
| **Slack** | Actionable entire-machine admin notices and separate Panel operational notices. |

## Normal workflow

1. A student submits one Form request and receives a ticket and receipt.
2. The advisor approves or declines the specific request in the tracker.
3. The BEAST scheduler evaluates ordinary eligible requests and may book a fixed future window through the Panel.
4. Exclusive entire-machine security requests instead go to manual administrator review and Panel allocation.
5. The Panel reservation is synchronized to Monitoring, which notifies the student and shows assigned resources and job observations where available.
6. Students use the approved slot and release/finish on time. Historical Panel reservations remain visible in Monitoring.

## Two authoritative records, different purposes

**The Google tracker** is authoritative for the student's request and advisor approval. **The Panel** is authoritative for whether and how resources were actually reserved. A row marked pending can coexist briefly with a newly created Panel reservation while the independent synchronization catches up. Neither source should be silently replaced by a provisional suggestion.

## Why the design matters

- Central coordination reduces accidental double-booking and creates a durable record of who requested what.
- Advisors approve the research scope without administering GPUs.
- BEAST can allocate eligible resources without the Google system directly operating the Panel.
- External researchers can participate in the request workflow without receiving administrative Panel privileges.
- Independent notification channels reduce dependence on any one user interface, but can briefly disagree while data propagates.
- Manual handling is retained for experiments where an ordinary scheduler cannot guarantee suitable operating conditions.

For user permissions and actions, see [Policy](policy.md) and [Known boundaries](limitations.md).
