# Guide for research advisors

Advisors review **the research purpose and proposed resource scope for each reservation**. This review is distinct from administrative control of the shared hardware.

## What you receive

For a valid submission, the advisor email address entered by the student receives a message identifying the ticket, student, project, proposed resource request, and requested Eastern-time window. It includes a direct link to the **Approved by Advisor** cell in the shared **GPU_Request_Tracker** Google Sheet.

If the link is not accessible, contact the BEAST administrators to obtain the necessary Sheet permissions. Access to the tracker must remain controlled; do not share editing links publicly.

## What to check

1. **Research scope:** Is this legitimate, authorized lab research? Does the proposed job or experiment batch match the project?
2. **Resource proportionality:** Are the number of GPUs, CPU cores, RAM, and duration justified?
3. **Operational risk:** Are there driver, VM, security, side-channel, exclusive-machine, or other disruptive requirements?
4. **Scheduling expectations:** Does the student understand that approval does not reserve resources or grant server access?

Select **Approved** or **Declined** in the existing dropdown. Avoid modifying unrelated rows or administrative columns.

## Why approval is per reservation

Approval of a research project does not imply approval of every future run. Two jobs under one project can require very different hardware, time, software, isolation, and risk levels. Per-reservation review records which specific job and scope the advisor supports while allowing eligible routine requests to be scheduled automatically without waiting for a second administrator approval. **Students may submit several planned slots for the same project. Advisors can review all of them in one sitting, selecting a decision for each individual ticket.** This reduces repeated interruptions while encouraging students to anticipate their computing needs and organize their work.

A student may revise an **unallocated** approved ticket to request fewer resources, an equal or shorter duration, or a new time within the permitted workflow without obtaining a new advisor signature. A different project, expanded demand, or materially changed experimental scope requires fresh review. See [Queue and changes](queue.md).

## What happens after you approve

| Request | Next action |
| --- | --- |
| Light / Standard / Intensive | The BEAST scheduler evaluates the request and may reserve available resources. |
| Security / Side-Channel + Specific allocation | The scheduler evaluates it with priority over routine computation when making new bookings. |
| Security / Side-Channel + Entire machine | The administrators receive a manual-action notification and control the exclusive booking. |
| Request with unusual environment needs | Unattended booking may be blocked; the student or an administrator must resolve the requirement. |

**The advisor does not need to allocate GPUs or operate the local Panel.** A confirmed reservation, not the Sheet's advisor approval, defines when resources may be used.
