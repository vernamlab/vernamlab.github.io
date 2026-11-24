# Help and troubleshooting

Start by locating your **GPU-#### ticket number**, verifying the registered email address, and checking whether the request is pending, queued, or Panel-confirmed.

| Problem | First check | Next step |
| --- | --- | --- |
| No submission receipt | Inbox and Spam/Quarantine; email entered in Form | Ask administrator to verify the tracker row and receipt status. |
| Advisor did not get an email | Advisor email in the original request; spam filtering | Confirm valid ticket and ask administrator to check the advisor-notified record. |
| Advisor link will not open | Signed-in Google account and Sheet access | Request authorized tracker access from administrators. |
| Request stays awaiting scheduling | Advisor approval, requested window, queue feedback | Allow the next scheduler cycle; report repeated missing feedback. |
| No GPUs available | vCPUs, RAM, calendar overlap, exclusivity | Stay queued or reduce resources/change time within allowed limits. |
| Original window has expired | Ticket was never Panel-booked | Request a future window; past slots cannot be booked. |
| No alternatives offered | Capacity or timing limits may leave no feasible suggestions | Stay queued, propose a different time or smaller requirements. |
| Can't see **Cancel request** | Ticket not eligible, already booked, manual request, or edits disabled/expired | See [Cancellation](cancellation.md); contact administrator if needed. |
| Private status link not received | Email matches ticket; Spam/Quarantine; request rate limits | Try later or contact admin with ticket/email. |
| Monitoring is behind Slack | Panel sync not completed | Wait for the next monitoring update; ask admin if it persists. |
| Wrong resources/assigned GPUs | Compare Panel reservation and request | Do not use unapproved allocation; notify administrator. |
| Admin sees a ticket already booked | Existing Panel record or in-progress booking claim | Do not create a duplicate; reconcile the original ticket. |
| Request has unusual software/VM needs | Additional requirements field | Contact administrator; unattended booking may be blocked. |
| Student needs an extension | Current Panel booking cannot be changed via queue controls | Ask administrator before the slot ends. |
| Host login works but GPU commands fail | Make sure you entered the **confidential VM** through `beast` | Follow [VM login instructions](vm-access.md); GPUs are not available directly on the host. |
| GPU reports `not-ready` | In the VM, check `nvidia-smi conf-compute -grs` | Contact an administrator; do not restart attestation/driver services. |
| CUDA shows fewer than eight GPUs | Check the assigned GPU IDs and `CUDA_VISIBLE_DEVICES` | The Python process may see only the intentionally selected GPUs; do not use GPUs outside the reservation. |
| Shared environment needs system changes | Confirm whether the proposed package touches NVIDIA drivers, kernel, or attestation | Get advance administrator authorization before any disruptive change. |

## What to include in a support request

Include the **ticket ID**, your registered email address, the **Eastern-time window**, current status, and a short description. Include a screenshot of the relevant student-facing page only if needed. **Never send passwords, access tokens, private monitoring links, or confidential job data** in support messages.

## Contact

Use the BEAST administrator contact channel provided by your research advisor or lab onboarding materials. A public administrator email address has not been specified in this release; maintainers should add the authorized contact method before publishing this site broadly.

For system behavior and boundaries, see [Known limitations](limitations.md). For common questions, see the [FAQ](faq.md).
