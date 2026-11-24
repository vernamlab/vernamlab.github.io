# BEAST usage and access policy

These rules apply to all approved BEAST research users, including external collaborators. An advisor's approval and a technical reservation do not override laboratory safety or access requirements.

## Research and approval

1. **Authorized research only.** Use BEAST for approved Vernam Lab/WPI-associated research. Personal or unrelated computation is not permitted. External collaborators require explicit eligibility and account authorization.
2. **Submit a documented request.** Each job or defined batch needs a ticket with a purpose, resource scope, and fixed time window. A message in Slack, an email, or direct access to an administrator is not a replacement for the official request record.
3. **Advisor review per reservation.** The advisor must approve the requested work and scope. Students may request multiple future slots, and an advisor may review these tickets together, but each ticket requires a separate decision. A student's checkbox asserting prior discussion is not a substitute for advisor action in the tracker.
4. **Use only a confirmed booking.** An account, advisor approval, free-looking GPU, or provisional queue suggestion is not permission to execute. Begin only within the time and scope of a confirmed Panel reservation.

## Shared-resource conduct

5. **Respect the allocation.** Use only the reserved GPUs and approved CPU/RAM, for the stated job and time. Finish on time. Request changes or extensions **before** the reservation expires; do not create overlapping jobs under one ticket outside its limits.
6. **Security research priority.** Security-specific reservations are prioritized for new bookings. Ordinary computation is best effort and may be rescheduled or administratively stopped when authorized research requires the system. The scheduler does not itself preempt running work.
7. **Exclusive experiments need explicit handling.** Security + Entire machine is not automatically scheduled. Coordinate disruptive, side-channel, physical, power, reset, host-level, or measurement-sensitive work with administrators. A full-machine reservation does not technically enforce isolation by itself.
8. **Protect other users' work.** Avoid unapproved resource monopolization, interfering processes, disruptive benchmarks, or experiments outside the agreed scope. Report conflicts or unexpected behavior promptly.

## Accounts, software, and information

9. **Use your own credentials.** Do not share accounts, private status links, tokens, or access methods. A reservation does not create an OS login or grant additional administrative privileges.
10. **Do not change shared configuration without authorization.** A VM account may include technical `sudo` access, but that is not permission to modify shared drivers, firmware, kernel, Secure Boot, PCIe attestation, Fabric Manager, other users' environments, or host/VM settings. Permitted package installation and user-level environments must not change pinned GPU components or shared services. **Reboots and disruptive system changes require advance administrator authorization**, not merely warning other users. See the [confidential VM house rules](vm-access.md).
11. **Handle data responsibly.** Protect research and student data, keep credentials and sensitive datasets out of public descriptions or repositories, back up results you need, and remove unnecessary temporary files. Status links and the advisor tracker must not be published. The VM is shared and the administrator note states that VM users have `sudo`; directory permissions alone therefore do **not** establish confidentiality against other privileged VM users. Obtain administrator guidance before placing sensitive or regulated data there.
12. **Report errors promptly.** Incorrect student emails, wrong GPU IDs, stale telemetry, reservation collisions, or security incidents should be raised with the BEAST administrators before proceeding.

## Consequences of unauthorized use

Under the stated lab usage policy, verified unauthorized work, use outside the approved time/scope, or deliberate bypass of booking controls is subject to **job termination** and a **24-hour suspension of system access**, with advisor notification. Repeated or deliberate violations may result in longer suspension. These are **administrative enforcement measures**; the current Panel and scheduler do not automatically isolate all workloads or detect and terminate every policy violation.

## What the policy does not promise

A booking is a permission and coordination record, not a guarantee of performance, exclusive physical isolation (unless separately arranged and verified), uninterrupted execution, data backup, account provisioning, or absence of other host activity. The administrators retain authority to address safety, maintenance, policy incidents, and resource conflicts.
