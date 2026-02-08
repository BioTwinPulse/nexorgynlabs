
import React from 'react';
import { 
  Shield, Brain, Settings, Lock, Activity, Globe, Database, Cpu, Search, Zap, 
  UserCheck, Briefcase, Landmark, PenTool, Scale, FileText, BarChart3, HeartPulse,
  Gavel, History, Building2, UserPlus, ClipboardCheck, LayoutGrid, Terminal, Target, Compass,
  Network, Workflow, Fingerprint, Globe2, Palette, Eye, HardDrive, Share2, Rocket
} from 'lucide-react';

export const COLORS = {
  quantumBlue: '#00D1FF',
  plasmaPurple: '#9D00FF',
  signalGreen: '#00FF94',
  infraRed: '#FF3B3B',
  spaceNavy: '#020617',
  spectralGradient: 'linear-gradient(to right, #FF8A00, #FACC15, #4ADE80, #22D3EE)',
  sovereignGrey: 'linear-gradient(to bottom, #E2E8F0, #94A3B8, #475569)'
};

export const CONTACT_EMAIL = "freezan@nexorgynlabs.one";

export const MISSION_VISION = {
  vision: {
    title: "The Vision",
    statement: "To architect the unshakeable foundation for civilization-scale systems, where global strategic intelligence is governed by deterministic mathematical proof and total sovereignty.",
    tagline: "Absolute Certainty. Global Scale."
  },
  mission: {
    title: "The Mission",
    statement: "To engineer sovereign, hallucination-free AI and Web3 operating systems that empower critical institutions to execute high-stakes decisions with cryptographic integrity and jurisdictional security.",
    tagline: "Engineering Trust at the Speed of Light."
  }
};

export const PLATFORMS = [
  { 
    id: 'freeza', 
    name: 'Freeza', 
    tagline: 'Deterministic Talent Protocol', 
    subTagline: 'Sovereign Career Operating System for the Global Talent Rail.',
    headline: "The Visibility of Capability.",
    url: 'https://www.freeza.one',
    icon: <Fingerprint size={24} />,
    summary: "Freeza replaces analog friction with a Global Talent Rail powered by high-velocity reasoning. It normalizes human capability into a liquid asset class, allowing institutional-grade verification of talent across any jurisdiction.",
    problem: "Human talent is trapped in static, unverifiable resumes that create massive systemic latency.",
    architecture: "Deterministic Talent Protocol // Global Talent Rail",
    capabilities: ["Cryptographic Capability Proofs", "AI Reasoning Talent Audit", "Non-Custodial Identity", "High-Velocity Routing"],
    governance: "Governed by NexOrgyn Labs Sovereign Identity protocols.",
    impact: "Total normalization of human capital on a global scale."
  },
  { 
    id: 'growthos', 
    name: 'GrowthOS', 
    tagline: 'Sovereign AI Chief Growth Officer', 
    subTagline: 'Authorized reasoning engine for Fortune 5 growth stacks.',
    headline: "Authorized Executable Roadmaps.",
    url: 'https://www.aiggrowthos.pro',
    icon: <Zap size={24} />,
    summary: "GrowthOS synthesizes multi-dimensional market signals into authorized executable roadmaps. It eliminates the gap between boardroom vision and market execution through modular hexagonal reasoning.",
    problem: "Latency between signal detection and strategic execution leads to value erosion.",
    architecture: "Modular Hexagonal Reasoning Architecture",
    capabilities: ["Signal-to-Strategy Synthesis", "Distributed Decision Logic", "Hallucination-Hardened Reasoning", "Autonomous Execution"],
    governance: "Regulated by Causal Inference guardrails.",
    impact: "Eliminating the gap between board vision and market reality."
  },
  { 
    id: 'astrapilot', 
    name: 'AstraPilot', 
    tagline: 'Deterministic Execution Kernel', 
    subTagline: 'Eliminating the Execution Gap via Mathematical DNA Schemas.',
    headline: "Strategy. Proven. Executed.",
    url: 'https://www.astrapilot.pro',
    icon: <Rocket size={24} />,
    summary: "AstraPilot solves semantic drift by binding strategic intent to mathematical schemas. Every institutional objective is tracked with cryptographic certainty from the board level to the ground.",
    problem: "90% of strategies fail due to semantic drift during organizational transit.",
    architecture: "Deterministic Kernel // DNA Schema Binders",
    capabilities: ["Ambition Normalization", "OpEx-to-Outcome Binding", "Semantic Drift Prevention", "Cryptographic Audit"],
    governance: "Audited via NexOrgyn HSM modules.",
    impact: "Mathematically proving that vision equals result."
  },
  { 
    id: 'adthink', 
    name: 'AdThink', 
    tagline: 'Living Ad Engine', 
    subTagline: 'High-frequency, non-custodial AI synthesis for brand sovereignty.',
    headline: "Tactile Brand Sovereignty.",
    url: 'https://www.adthink.one',
    icon: <Palette size={24} />,
    summary: "AdThink provides VPC-isolated nodes for brand artifact generation. It allows institutions to produce high-yield creative intelligence without exposing proprietary brand DNA to public models.",
    problem: "Standard AI tools compromise brand data and ignore institutional custody.",
    architecture: "VPC-Isolated Non-Custodial Synthesis",
    capabilities: ["Proprietary DNA Forging", "VPC Node Isolation", "Cinema-Grade Synthesis", "Non-Public Training"],
    governance: "Compliant with Global Copyright Governance.",
    impact: "High-yield production with zero data custody risk."
  },
  { 
    id: 'narrativeos', 
    name: 'NarrativeOS', 
    tagline: 'Corporate Identity Citadel', 
    subTagline: 'Deterministic OS for Reputation and Narrative Governance.',
    headline: "The Citadel of Reputation.",
    url: 'https://www.narrativeos.one',
    icon: <PenTool size={24} />,
    summary: "NarrativeOS creates a hardened environment to map and defend institutional narrative DNA. It provides a defense-tech inspired citadel for reputation governance in high-risk information environments.",
    problem: "AI-driven narrative drift makes institutional brand defense impossible.",
    architecture: "Hardened Reputation Governance Citadel",
    capabilities: ["Narrative DNA Mapping", "Information Warfare Simulation", "Identity Defense", "Reputation Proof-of-Stake"],
    governance: "Aligned with global institutional ESG reporting.",
    impact: "Absolute command over the institutional narrative."
  },
  { 
    id: 'omnisre', 
    name: 'Omnis-RE', 
    tagline: 'Real Estate Intelligence Infrastructure', 
    subTagline: 'Autonomous Intelligence for Global Asset Classes.',
    headline: "Reasoning for the Global Asset Class.",
    url: 'https://www.omnisreai.one',
    icon: <Building2 size={24} />,
    summary: "Omnis-RE governs and reasons upon global real estate data using sovereign sharding. It transforms static property data into autonomous strategic yield for REITs and Sovereign Wealth Funds.",
    problem: "Legacy platforms store data but cannot autonomously reason or execute yield.",
    architecture: "Sovereign Sharding // Post-Quantum Governance",
    capabilities: ["Autonomous Yield Reasoning", "Jurisdictional Sharding", "HSM-Backed Security", "Portfolio Execution"],
    governance: "Fiduciary-grade alignment.",
    impact: "Transforming real estate data into autonomous yield."
  },
  { 
    id: 'biotwin', 
    name: 'BioTwin-Pulse', 
    tagline: 'Autonomous Regulatory Intelligence', 
    subTagline: 'Digital Twin of Regulatory State for MedTech and Pharma.',
    headline: "Compliance Through Engineering Reality.",
    url: 'https://www.biotwinai.pro',
    icon: <HeartPulse size={24} />,
    summary: "BioTwin-Pulse creates a digital twin of institutional regulatory postures. It bridges engineering reality with statutory truth, ensuring zero-latency compliance for critical innovations.",
    problem: "Static regulatory submissions are obsolete the moment they are filed.",
    architecture: "RIS Digital Twin Mesh Architecture",
    capabilities: ["Engineering-to-Statute Bridging", "Dynamic Modeling", "Compliance Evolution", "Drift Alignment"],
    governance: "Certified under EU MDR and global HIPAA standards.",
    impact: "Zero-latency compliance for life-saving innovation."
  }
];

export const NAV_LINKS = [
  { 
    label: 'The Conglomerate', 
    sublinks: [
      { label: 'System Registry', path: '/platforms', icon: <LayoutGrid size={14} /> },
      { label: 'Infrastructure', path: '/technology', icon: <Cpu size={14} /> },
      { label: 'The Vault', path: '/security', icon: <Lock size={14} /> },
    ]
  },
  { 
    label: 'Institutional', 
    sublinks: [
      { label: 'Doctrine', path: '/manifesto', icon: <FileText size={14} /> },
      { label: 'Governance', path: '/governance', icon: <Gavel size={14} /> },
      { label: 'Transparency', path: '/transparency', icon: <BarChart3 size={14} /> },
      { label: 'Public Affairs', path: '/policy', icon: <Globe size={14} /> },
    ]
  },
  { 
    label: 'Operations', 
    sublinks: [
      { label: 'Global Map', path: '/operations', icon: <Globe size={14} /> },
      { label: 'System Status', path: '/status', icon: <Activity size={14} /> },
      { label: 'Procurement', path: '/procurement', icon: <UserPlus size={14} /> },
    ]
  },
];

export const PILLARS = [
  {
    title: 'Sovereignty',
    desc: 'Tactile sovereignty through VPC-isolated nodes and sharding.',
    icon: <Shield className="text-blue-400" />
  },
  {
    title: 'Determinism',
    desc: 'Mathematical DNA schemas and symbolic logic reasoning kernels.',
    icon: <Brain className="text-purple-400" />
  },
  {
    title: 'Authority',
    desc: 'Authorized executable roadmaps for global Fortune 5 institutions.',
    icon: <Settings className="text-green-400" />
  },
  {
    title: 'Integrity',
    desc: 'Cryptographically verifiable capability and reputation governance.',
    icon: <Lock className="text-red-400" />
  }
];

export const ROADMAP_DATA = [
  { year: '2026', focus: 'Conglomerate Mesh Integration', desc: 'Unifying all system kernels into a single deterministic global fabric.' },
  { year: '2027', focus: 'Sovereign Wealth Protocol', desc: 'Deployment of Omnis-RE and BioTwin into G20 sovereign infrastructures.' },
  { year: '2028', focus: 'The Talent Rail Genesis', desc: 'Full normalization of human capability through the Freeza Protocol.' },
  { year: '2030', focus: 'Institutional Singularity', desc: 'Total autonomous governance of strategic strategic intent and execution.' }
];

export const RESEARCH_LABS = [
  { title: 'Symbolic Fusion Lab', icon: <Cpu />, desc: 'Engineering kernels that prioritize logic over probabilistic pattern matching.' },
  { title: 'Reputation Defense Lab', icon: <Scale />, desc: 'Simulating information warfare vectors to harden corporate narrative DNA.' },
  { title: 'Post-Quantum Crypto Lab', icon: <Lock />, desc: 'Hardening institutional sharding against future cryptographic threats.' },
  { title: 'Regulatory RIS Lab', icon: <HeartPulse />, desc: 'Building the next generation of dynamic regulatory digital twins.' }
];
