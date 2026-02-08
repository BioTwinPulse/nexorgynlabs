
import React from 'react';

export interface Platform {
  id: string;
  name: string;
  tagline: string;
  icon: React.ReactNode;
}

export interface Pillar {
  title: string;
  desc: string;
  icon: React.ReactNode;
}