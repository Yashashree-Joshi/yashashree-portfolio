import { Research } from "../types";

export const research: Research[] = [
  {
    id: "res-1",
    title: "Beyond Transformers: Exploring Graph-based Attention Mechanisms",
    conference: "NeurIPS 2023",
    abstract: "This paper introduces a novel approach to attention mechanisms by modeling sequences as dynamic graphs. We demonstrate that this architecture achieves comparable performance to standard transformers while reducing computational complexity by 40% on long-context tasks. Our methodology provides theoretical guarantees for convergence in bounded time.",
    pdfUrl: "https://example.com/paper.pdf",
    github: "https://github.com/placeholder",
    presentation: "https://example.com/slides"
  },
  {
    id: "res-2",
    title: "Robust Byzantine Consensus for Low-Power Edge Devices",
    conference: "SOSP 2022",
    abstract: "We propose a lightweight Byzantine Fault Tolerant protocol specifically designed for environments with high node churn and low computational power. By decoupling the transaction ordering from state execution, we achieve a 3x throughput increase compared to traditional BFT systems in simulated IoT networks.",
    pdfUrl: "https://example.com/paper2.pdf",
    poster: "https://example.com/poster.pdf"
  },
  {
    id: "res-3",
    title: "Generative World Models for Autonomous Navigation",
    conference: "ICLR 2023",
    abstract: "Autonomous navigation systems often struggle with out-of-distribution scenarios. We developed a generative world model that simulates realistic edge cases during training, leading to a 25% improvement in zero-shot transfer learning for autonomous agents in urban environments.",
    pdfUrl: "https://example.com/paper3.pdf",
    github: "https://github.com/placeholder2"
  },
  {
    id: "res-4",
    title: "Optimizing Memory Latency in Sparse Neural Networks",
    conference: "ASPLOS 2021",
    abstract: "Sparse neural networks present unique challenges for modern hardware accelerators due to irregular memory access patterns. This paper details a novel hardware-software co-design that reorders sparse matrix operations to maximize cache hit rates, yielding significant performance gains.",
    pdfUrl: "https://example.com/paper4.pdf"
  }
];
