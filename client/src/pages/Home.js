import React, { Component } from 'react';
import { grid, gridTemplateRows, SxProps } from '@mui/system';
import Box from '@mui/material/Box';

export default function Home() {
  return (
	<Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
		<Item>Banner</Item>
		<Item>Dashboard</Item>
		<Item>FooterMenu</Item>
	</Box>
  );
}
