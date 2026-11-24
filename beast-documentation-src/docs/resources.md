# Workload profiles and resources

Select the smallest resource profile that can support the proposed work. The scheduler considers **GPUs, CPU, RAM, and time together**; spare GPUs alone do not guarantee that a request can be booked.

## Standard profiles

| Profile | GPUs | vCPUs | RAM | Typical use | Booking path |
| --- | ---: | ---: | ---: | --- | --- |
| **Light** | 1 | 4 | 32 GiB | Inference, smaller experiments | Automatic after advisor approval |
| **Standard** | 1 | 16 | 64 GiB | Training and fine-tuning | Automatic after advisor approval |
| **Intensive** | 2 | 32 | 128 GiB | Larger models or distributed training | Automatic after advisor approval |

The GPUs run in the [shared confidential GPU VM](vm-access.md); the 141 GB memory reported per H200 in the administrator note is **GPU memory**, distinct from the **system RAM** requested in these profiles.

The presets describe **reservation requests**, not guaranteed machine partitions or performance. The Panel must still be able to allocate the requested combination for the full window.

## Security / Side-Channel Experiments

Security requests follow **one of two separate paths**.

### Specific allocation

Choose **Security / Side-Channel Experiments → Specific allocation** and specify the needed GPU count, vCPUs, and RAM. The Form offers numeric choices (including a zero-GPU choice for applicable CPU-only work). Valid requests can be **automatically scheduled after advisor approval** if the required resources and time are available. The scheduler prioritizes this class over routine computation when creating new bookings; it does **not** terminate running work automatically.

### Entire machine

Choose **Security / Side-Channel Experiments → Entire machine** for measurements where other jobs or background activity could invalidate the experiment. This requests an **exclusive reservation** and is **excluded from automatic scheduling**. After advisor approval, the administrators receive an actionable Slack notification and manually decide whether, when, and how to allocate the whole machine.

Exclusive reservation is an **administrative scheduling policy**, not a technical proof that all background processes have been stopped. Coordinate experimental isolation and operating conditions with the administrators.

## Special conditions

Describe nonstandard containers, drivers, virtual-machine settings, confidential-computing constraints, disruptive tests, or other environment requirements in **Additional requirements**. Requests with nonempty special-environment requirements are **not eligible for unattended booking by the current production worker** and may require administrator review or correction, even if a routine profile was selected. Do not assume that the automated Slack channel alerts administrators for every such case.

The resource profiles do not confer permission to reboot, reconfigure drivers, disable security controls, interfere with other users, or change host/VM settings. Shared VM `sudo` access does not override this restriction. [Policy](policy.md) applies separately.

## Choosing the time window

- Request a **fixed start and end**, in Eastern Time, sufficiently far ahead for advisor approval, scheduling, and notifications.
- Selecting **Flexible scheduling** allows suggestions; it does **not** authorize BEAST to silently move your booking.
- If the original start passes before allocation, the ticket can remain queued, but a new future window must be explicitly accepted before booking.
- Resource or duration increases beyond the advisor-approved scope require a new approval/request. See [Changing requests](queue.md).
