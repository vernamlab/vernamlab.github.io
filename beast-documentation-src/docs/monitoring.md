# Monitoring and notifications

[BEAST GPU Monitoring](https://script.google.com/macros/s/AKfycbzWCH2o4QhGxlCdeSqQLAMZqZ5Phn-M8Zh_xGp0HmbXjMccgReamnvSoiNozLkYTs4/exec) is the student-facing status portal. The local [GPU Panel](https://beast.wpi.edu:8443/) remains the administrative source for confirmed reservations.

## Obtain a private monitoring link

Enter the **same email used for the request or Panel reservation** and select **Email my status link**. The link is emailed only to the registered inbox when an eligible queue entry or Panel reservation is found. Do not share or forward the link.

The link provides up to **14 days of read access** and, for eligible unallocated queue tickets only, **48 hours of edit capability after issuance**. Request another link when necessary. Email delivery can be delayed; if nothing arrives, check Spam/Quarantine and confirm the address stored for the ticket.

## What you can see

- **Current and upcoming reservations** with their scheduled times, allocated GPUs, CPU, RAM, and Panel state.
- **My pending GPU requests** with scheduling feedback, provisional alternative windows, and allowed changes.
- **Reservation history**, including completed, cancelled, expired, or missed reservations.
- **Operational observations** such as GPU utilization and linked processes where the system has sufficient evidence.

Monitoring reflects observations from the administrative Panel and the shared confidential VM. It does not authenticate the scientific workload or prove GPU/process exclusivity.

The portal is not a proof that an experiment is actually running. Observed GPU activity may not be attributable to a particular job, and delayed or stale telemetry should not be treated as live occupancy.

## When does a student receive email?

| Event | Email behavior |
| --- | --- |
| Request recorded | A submission receipt is sent to the student; the advisor receives a separate review request for valid submissions. |
| Resources unavailable, rescheduling needed, or request needs correction | The Scheduler Gateway can email the registered student with queue feedback without repeating an identical ticket revision/status notice. |
| New Panel allocation or allocation change | Monitoring sends a reservation notice after the Panel snapshot is synchronized. |
| Reservation reported started/running | Monitoring may send a start notification based on the available Panel/telemetry observations. |
| Reservation approaching its end | Monitoring sends an end-of-window reminder when the configured threshold is reached. |
| Completion, observed linked-process exit, or overdue state | Monitoring may send corresponding status notices, depending on observation and timing. |

The bridge usually synchronizes Panel data to Monitoring about **every five minutes**; notifications need not arrive at the exact instant the administrator or scheduler creates a reservation. Notifications are best-effort delivery, not a substitute for checking the confirmed Panel reservation.

### Manual Panel reservations

When an administrator allocates resources directly, the **Student email** field in the Panel must contain the student's correct address. Monitoring uses that address to deliver allocation and lifecycle emails, even when the reservation was created under an administrator's Panel account. A missing or incorrect student email may prevent the student from receiving the notice.

## Two separate Slack channels of notification

- **BEAST GPU Requests** posts to the administrator channel only for **Security / Side-Channel + Entire machine** tickets after advisor approval, plus critical email-delivery problems. Routine submissions and advisor decisions do not generate administrator Slack traffic.
- **GPU Panel** can send separate operational Slack notices when actual reservations are created or updated. These messages are not approval requests and may appear before Monitoring email synchronization.

Students generally do not need Slack access to submit, track, or receive confirmations.
