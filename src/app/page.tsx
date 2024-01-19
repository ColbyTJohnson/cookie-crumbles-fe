"use client";

import * as React from "react";
import { Box, Typography } from "@material-ui/core";

function Heading(props: { children: React.ReactNode }) {
  return <Typography variant="h1">{props.children}</Typography>;
}

function Section(props: { children: React.ReactNode }) {
  return <Box>{props.children}</Box>;
}

export default function Home() {
  return (
    <main>
      <div>
        <Heading>Cookie Crumbles</Heading>
        <Section>
          <Typography variant="h2">Put the guts here</Typography>
        </Section>
      </div>
    </main>
  );
}
