![Figure 1](/images/acm-banner.png)  
*Official banner for ACM MobiHoc 2025 (used here for academic reflection; ACM SIGMOBILE).*

Attending ACM MobiHoc 2025 in Houston was a chance to see how my work fits into the broader research landscape. My focus is on using machine learning for resource allocation in wireless networks, a space that bridges computer science and wireless systems. I went to MobiHoc to understand how the algorithmic tools I use interact with the practical realities of network design, and it was refreshing to learn from both communities in the same room.

I've spent a lot of time training models and tuning hyperparameters, but MobiHoc reminded me how different things look when your "data" is real-time signals, moving users, and shared resources. Seeing how others tackle scheduling and adaptation problems in dynamic settings gave me new perspective on my own work, especially how to make models that respond fluidly to change instead of needing to be constantly retrained.

## Learning from HEMA
One paper that resonated with me leveraged a reinforcement learning approach to adaptive scheduling, which modeled user behavior as a collection of agents [1]. It helped me see scheduling less as a static optimization problem and more as a continuous negotiation among many moving parts, an idea I plan to explore further in my own research.

## From Infrastructure to Insight
The Qualcomm keynote on the future of 6G stood out for its emphasis on on-device intelligence. One line that stuck with me: we shouldn't "just throw capacity at (the problem)." The message was that smarter, context-aware allocation can often achieve what scaling alone cannot. That idea feels central to my work too. Optimization isn't always about bigger models or more power, it's about being strategic with what already exists. On-device learning that adapts to user ecosystems shows what "scaling smart" might look like for the next generation of networks.

## Collaborative and Edge Intelligence
Another talk that stayed with me presented an approach to collaborative inference where devices share only partial data but still produce robust predictions. The notion of lightweight "gossip rounds," where devices share minimal updates to improve collective inference accuracy. This work outlined a concrete way to coordinate learning across devices without relying on a central server. [2]

It tied neatly into something I've been thinking about. In an era where bandwidth and reliability fluctuate constantly, intelligent collaboration in a decentralized manner might be the real differentiator for 6G systems.

## Balancing Freshness and Performance
My lab mate, Lin Wang, presented her work on balancing Age of Information and throughput in unreliable networks. Her framing of freshness versus performance really stuck with me. It visualized trade-offs that often get buried inside optimization objectives. It also reminded me that ML models need to coexist with system-level constraints, not ignore them. [3] Plus, seeing a familiar name in the program was really cool!

## Final Thoughts
MobiHoc 2025 was less about learning specific techniques and more about seeing how ideas in machine learning and networking fit together in practice. These reflections capture my perspective from the conference and what resonated most with my work. For those interested in the technical details, the referenced papers are linked below. Conferences like this remind me why interdisciplinary work is exciting, they connect algorithms to the physical world they're meant to improve.

## References
[1] X. Wang, Z. Li, and L. Huang. Beyond Static Populations: Efficient Delay-Constrained Scheduling for Dynamic Users via Deep Reinforcement Learning. In MobiHoc 25, Houston, TX, USA. ACM, 2025. DOI:10.1145/3704413.3764445.

[2] S. Ganguli, Z. Zhou, C. G. Brinton, and D. Inouye. Robust Collaborative Inference with Vertically Split Data Over Dynamic Device Environments. In MobiHoc 25, Houston, TX, USA. ACM, 2025. DOI:10.1145/3704413.3764450.

[3] L. Wang and I.-H. Hou. Understanding the Fundamental Trade-Off Between Age of Information and Throughput in Unreliable Wireless Networks. In MobiHoc 25, Houston, TX, USA. ACM, 2025. DOI:10.1145/3704413.3764415.

Keynote. Qualcomm Research. Empowering Next-Generation User Experiences and Services at Scale with 6G. Presented at ACM MobiHoc 2025, Houston, TX.