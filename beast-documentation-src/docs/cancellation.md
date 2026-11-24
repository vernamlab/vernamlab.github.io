# Cancel, revise, or extend a request

The right procedure depends on **whether BEAST has created a Panel reservation**.

| Current state | Can the student cancel it in Monitoring? | Required action |
| --- | --- | --- |
| Submitted; awaiting advisor approval | **No** | Contact an administrator to withdraw or correct the request. |
| Advisor-approved, eligible, still queued | **Yes** | Use **Cancel request** in Monitoring while the private link is valid for edits. |
| Advisor-approved, Security + Entire machine | **No** | Contact an administrator; the request is handled manually. |
| Scheduler is claiming/booking the request | **No** | Wait for reconciliation or contact an administrator. |
| Already scheduled in the GPU Panel | **No** | Contact an administrator to cancel or modify the **actual Panel reservation**. |
| Running or completed | **No** | Coordinate stopping/completion with the administrator; a historical ticket cannot be reused. |

## Cancel a queued request yourself

1. Open [BEAST GPU Monitoring](https://script.google.com/macros/s/AKfycbzWCH2o4QhGxlCdeSqQLAMZqZ5Phn-M8Zh_xGp0HmbXjMccgReamnvSoiNozLkYTs4/exec).
2. Enter the email associated with the request and select **Email my status link**.
3. Open the private link, find the ticket under **My pending GPU requests**, and select **Cancel request**.
4. Confirm the action. The request is marked cancelled and removed from the automatic queue.

**This action does not cancel a GPU Panel reservation** and is deliberately disabled after a booking exists. It also does not cancel another ticket with similar details.

## Need to edit instead?

Select **Modify resources or time** for an eligible queued request. Keep the same project and workload scope, reduce rather than increase requested resources, and keep the same or a shorter job duration. BEAST checks the revised window again. There is no need to submit a new Form or repeat advisor approval for edits that remain within the approved limits.

## Reservation already scheduled?

Contact the administrators with the ticket ID, assigned time, and requested change. They must alter or cancel the Panel reservation so the shared calendar and Monitoring reflect the real allocation. A new Form submission by itself does **not** release the existing reservation.

## Private-link access

The emailed status link supports **read-only access for up to 14 days**. To modify an eligible queued request, use a link issued **within the last 48 hours**; request a fresh link if it becomes too old. Treat the link as private: anyone who obtains it may gain access to the associated status and, while editing remains authorized, the permitted queue actions.
