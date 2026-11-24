# Frequently asked questions

## Access and approvals

### Why can't I reserve GPUs directly in the local Panel?

The Panel changes the shared administrative reservation state. Direct self-allocation could create conflicts, disrupt research, or bypass checks for hardware-sensitive experiments. The ticketed scheduler coordinates resources fairly and gives an audit trail while still allowing automatic booking of routine requests.

### Why do I need a request rather than a permanent project allocation?

Each run can have different hardware needs, time, risk, and conflicts. Tracking a specific job or batch helps release unused resources and accommodate other researchers.

### Why must my advisor approve each booking?

Per-booking review verifies the scope actually being scheduled. Revisions that stay within the original approved limits can retain advisor approval; expanded or different work needs fresh review.

### Can I request multiple future slots for the same project?

Yes. You can plan several upcoming sessions and submit one ticket for each time slot or defined batch. Your advisor can review and approve the tickets **in a single sitting**, with a decision recorded for each. Planning ahead is encouraged, but each allocation still depends on available resources.

### How do I connect to the GPUs?

The GPUs run **inside the confidential VM**, not directly on the `beast` host. You must have both your host and VM account and log in through `beast.wpi.edu`. Read the [administrators' VM instructions](vm-access.md), including the SSH options, storage location, and readiness checks. A login account does not authorize GPU use without a reservation.

### Does my advisor's approval let me run immediately?

**No.** Wait for the Panel-confirmed reservation, then use only its allowed resources/time.

### Does an administrator also need to approve every booking?

**No.** Routine Light, Standard, Intensive, and Security + Specific allocation requests can be automatically booked after advisor approval. Security + Entire machine requests require manual administration.

### Can external collaborators submit a request?

Yes, the request system accepts valid external email addresses for authorized collaborators. Research eligibility, Sheet permissions where relevant, and server account access are handled separately.

### Do I need a BEAST server username before requesting?

No. Reserving resources and receiving Linux account access are separate steps.

## Workloads and scheduling

### How many GPUs can I request?

The Light/Standard presets use one GPU, Intensive uses two, and Security + Specific allocation allows a selected count, subject to current Panel limits. The complete machine is requested only under the manual exclusive-security path.

### Why is my request still awaiting the scheduler?

The scheduler checks periodically, and advisor approval, eligibility, telemetry, and capacity must all align. A new Panel reservation may also take another Monitoring sync cycle to appear.

### Why was a GPU-free time rejected?

BEAST considers **GPU IDs, vCPU capacity, RAM, other reservations, and exclusive windows**, not GPUs alone. Live telemetry and special requirements may also prevent unattended booking.

### Is the queue first-come, first-served?

Not strictly. Security-specific allocations are prioritized for new bookings, and actual feasibility depends on resources and times. Priority does not preempt running jobs automatically.

### What happens if my requested time has passed?

An unallocated ticket can remain queued, but BEAST cannot book the past. Accept or request a definite new future window.

### Can the system move me to another time automatically?

No. Suggested times are provisional. The student must request/accept a new fixed window and BEAST must recheck availability.

### Can I request fewer resources without asking my advisor again?

For an eligible still-unallocated request, yes: Monitoring permits limits-preserving resource reductions and equal/shorter duration, without changing the research scope.

### What if I need more GPUs, more time, or a different experiment?

Submit a new request for advisor review. Cancel any obsolete unallocated ticket to avoid duplicate demand.

### Will the scheduler start my program or guarantee it has isolated the GPU?

No. The Panel stores an advisory reservation. It does not launch the job, create accounts, or enforce physical isolation. Users and administrators must honor the agreed allocation.

## Cancellation and monitoring

### How do I cancel a pending request?

If advisor-approved, eligible, and not booked, use **My pending GPU requests → Cancel request** in the private Monitoring portal. Before advisor approval, for manual entire-machine requests, or after booking, contact an administrator.

### Can I cancel an already allocated GPU slot using Monitoring?

No. Ask the administrator to cancel the actual Panel reservation.

### Where do I see my booking and resource use?

Use [BEAST GPU Monitoring](https://script.google.com/macros/s/AKfycbzWCH2o4QhGxlCdeSqQLAMZqZ5Phn-M8Zh_xGp0HmbXjMccgReamnvSoiNozLkYTs4/exec) and request a private status link using the reservation email address.

### How long does my private monitoring link work?

Up to 14 days for viewing. Editing an eligible queued request requires a link issued within the last 48 hours.

### Why did Slack show a booking before I received email?

The local Panel can emit an operational Slack notice immediately. Monitoring email follows a separate scheduled synchronization, usually within about five minutes.

### I received no allocation email. What should I check?

Confirm the Panel booking exists, check Spam/Quarantine, and ask the administrator to verify the **Student email** recorded in the Panel. Email delivery is not a booking guarantee.

### Do I need Slack access?

No. Student intake and updates are handled through the Form, email, and Monitoring. Admin Slack is for manual-action and operational notices.

### What happens if I run outside my reservation?

It violates lab policy and can lead to job termination, an initial 24-hour access suspension, and advisor notification. The system does not automatically detect or stop every violation.

### Can I use a GPU if `nvidia-smi` shows it is idle?

No. Only Panel-confirmed allocations authorize GPU use. `CUDA_VISIBLE_DEVICES` limits which devices an application sees; it does not reserve a device, restrict another user's job, or bypass the reservation policy.

### Can I install packages with `sudo` inside the VM?

Only software changes permitted by the [usage policy](policy.md) and [VM house rules](vm-access.md). Technical `sudo` access is not permission to upgrade NVIDIA drivers, change the kernel, stop attestation/fabric services, or reboot the shared machine.

### Is my `/data/<username>` folder private?

It is intended for your files, but the administrator note says VM users have `sudo`. Do not treat filesystem permissions as protection from other privileged users. Contact administrators before storing data that require strict confidentiality.

### What if GPUs remain `not-ready`?

Follow the [VM readiness check](vm-access.md) and contact an administrator. Do not restart GPU, driver, or attestation services yourself.

### Can I reboot the VM after notifying everyone?

No. A reboot interrupts all users' work and requires **explicit administrator authorization** in addition to coordination and advance warning.
