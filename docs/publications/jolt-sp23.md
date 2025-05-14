---
title: "Jolt: Recovering TLS Signing Keys via Rowhammer Faults"
paper_url: "https://ieeexplore.ieee.org/abstract/document/10179450"
year: 2023
---

![Jolt paper image](/img/papers/jolt.png)

Digital Signature Schemes such as DSA, ECDSA, and RSA are widely deployed to protect the integrity of security protocols such as TLS, SSH, and IPSec. In TLS, for instance, RSA and (EC)DSA are used to sign the state of the agreed upon protocol parameters during the handshake phase. Naturally, RSA and (EC)DSA implementations have become the target of numerous attacks, including powerful side-channel attacks. Hence, cryptographic libraries were patched repeatedly over the years.Here we introduce Jolt, a novel attack targeting signature scheme implementations. Our attack exploits faulty signatures gained by injecting faults during signature generation. By using the signature verification primitive, we correct faulty signatures and, in the process deduce bits of the secret signing key. Compared to recent attacks that exploit single bit biases in the nonce that require 245 signatures. We show that the proposed attack also works on Schnorr and RSA signatures with minor modifications. We demonstrate the viability of Jolt by running experimentson libraries such as WolfSSL, OpenSSL, Microsoft SymCrypt, LibreSSL, and Amazon s2n.

*Koksal Mus, Yarkın Doröz, M. Caner Tol, Kristi Rahman, Berk Sunar*

**[IEEE Symposium on Security and Privacy 2023, (S&P 23)](https://ieeexplore.ieee.org/abstract/document/10179450)** 