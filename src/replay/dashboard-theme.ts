export const dashboardThemeCss = `
:root {
  --replay-surface: #ffffff;
  --replay-ink: #172033;
  --replay-muted: #5d667a;
  --replay-border: #d9deea;
  --replay-accent: #0f766e;
  --replay-warning: #b45309;
  --replay-danger: #b91c1c;
  --replay-success: #15803d;
}

.sales-replay-dashboard {
  color: var(--replay-ink);
  background: var(--replay-surface);
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 1120px;
  padding: 32px;
}

.sales-replay-dashboard section {
  border-bottom: 1px solid var(--replay-border);
  padding: 24px 0;
}

.sales-replay-dashboard h1,
.sales-replay-dashboard h2 {
  margin: 0 0 16px;
}

.sales-replay-dashboard dl {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  margin: 0;
}

.sales-replay-dashboard dt {
  color: var(--replay-muted);
  font-size: 12px;
  text-transform: uppercase;
}

.sales-replay-dashboard dd {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.sales-replay-dashboard table {
  border-collapse: collapse;
  width: 100%;
}

.sales-replay-dashboard th,
.sales-replay-dashboard td {
  border-bottom: 1px solid var(--replay-border);
  padding: 10px 12px;
  text-align: left;
}

.sales-replay-dashboard th {
  color: var(--replay-muted);
  font-size: 12px;
  text-transform: uppercase;
}

.opportunities ul {
  display: grid;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.opportunities li {
  border: 1px solid var(--replay-border);
  border-radius: 8px;
  padding: 12px;
}

.opportunities li[data-priority="high"] {
  border-left: 4px solid var(--replay-danger);
}

.opportunities li[data-priority="medium"] {
  border-left: 4px solid var(--replay-warning);
}

.opportunities li[data-priority="low"] {
  border-left: 4px solid var(--replay-success);
}

.score-band-000 {
  --score-hue: 0;
  background-color: hsl(0, 58%, 94%);
  color: hsl(0, 48%, 24%);
}

.score-band-001 {
  --score-hue: 1;
  background-color: hsl(1, 58%, 94%);
  color: hsl(1, 48%, 24%);
}

.score-band-002 {
  --score-hue: 2;
  background-color: hsl(2, 58%, 94%);
  color: hsl(2, 48%, 24%);
}

.score-band-003 {
  --score-hue: 4;
  background-color: hsl(4, 58%, 94%);
  color: hsl(4, 48%, 24%);
}

.score-band-004 {
  --score-hue: 5;
  background-color: hsl(5, 58%, 94%);
  color: hsl(5, 48%, 24%);
}

.score-band-005 {
  --score-hue: 6;
  background-color: hsl(6, 58%, 94%);
  color: hsl(6, 48%, 24%);
}

.score-band-006 {
  --score-hue: 7;
  background-color: hsl(7, 58%, 94%);
  color: hsl(7, 48%, 24%);
}

.score-band-007 {
  --score-hue: 8;
  background-color: hsl(8, 58%, 94%);
  color: hsl(8, 48%, 24%);
}

.score-band-008 {
  --score-hue: 10;
  background-color: hsl(10, 58%, 94%);
  color: hsl(10, 48%, 24%);
}

.score-band-009 {
  --score-hue: 11;
  background-color: hsl(11, 58%, 94%);
  color: hsl(11, 48%, 24%);
}

.score-band-010 {
  --score-hue: 12;
  background-color: hsl(12, 58%, 94%);
  color: hsl(12, 48%, 24%);
}

.score-band-011 {
  --score-hue: 13;
  background-color: hsl(13, 58%, 94%);
  color: hsl(13, 48%, 24%);
}

.score-band-012 {
  --score-hue: 14;
  background-color: hsl(14, 58%, 94%);
  color: hsl(14, 48%, 24%);
}

.score-band-013 {
  --score-hue: 16;
  background-color: hsl(16, 58%, 94%);
  color: hsl(16, 48%, 24%);
}

.score-band-014 {
  --score-hue: 17;
  background-color: hsl(17, 58%, 94%);
  color: hsl(17, 48%, 24%);
}

.score-band-015 {
  --score-hue: 18;
  background-color: hsl(18, 58%, 94%);
  color: hsl(18, 48%, 24%);
}

.score-band-016 {
  --score-hue: 19;
  background-color: hsl(19, 58%, 94%);
  color: hsl(19, 48%, 24%);
}

.score-band-017 {
  --score-hue: 20;
  background-color: hsl(20, 58%, 94%);
  color: hsl(20, 48%, 24%);
}

.score-band-018 {
  --score-hue: 22;
  background-color: hsl(22, 58%, 94%);
  color: hsl(22, 48%, 24%);
}

.score-band-019 {
  --score-hue: 23;
  background-color: hsl(23, 58%, 94%);
  color: hsl(23, 48%, 24%);
}

.score-band-020 {
  --score-hue: 24;
  background-color: hsl(24, 58%, 94%);
  color: hsl(24, 48%, 24%);
}

.score-band-021 {
  --score-hue: 25;
  background-color: hsl(25, 58%, 94%);
  color: hsl(25, 48%, 24%);
}

.score-band-022 {
  --score-hue: 26;
  background-color: hsl(26, 58%, 94%);
  color: hsl(26, 48%, 24%);
}

.score-band-023 {
  --score-hue: 28;
  background-color: hsl(28, 58%, 94%);
  color: hsl(28, 48%, 24%);
}

.score-band-024 {
  --score-hue: 29;
  background-color: hsl(29, 58%, 94%);
  color: hsl(29, 48%, 24%);
}

.score-band-025 {
  --score-hue: 30;
  background-color: hsl(30, 58%, 94%);
  color: hsl(30, 48%, 24%);
}

.score-band-026 {
  --score-hue: 31;
  background-color: hsl(31, 58%, 94%);
  color: hsl(31, 48%, 24%);
}

.score-band-027 {
  --score-hue: 32;
  background-color: hsl(32, 58%, 94%);
  color: hsl(32, 48%, 24%);
}

.score-band-028 {
  --score-hue: 34;
  background-color: hsl(34, 58%, 94%);
  color: hsl(34, 48%, 24%);
}

.score-band-029 {
  --score-hue: 35;
  background-color: hsl(35, 58%, 94%);
  color: hsl(35, 48%, 24%);
}

.score-band-030 {
  --score-hue: 36;
  background-color: hsl(36, 58%, 94%);
  color: hsl(36, 48%, 24%);
}

.score-band-031 {
  --score-hue: 37;
  background-color: hsl(37, 58%, 94%);
  color: hsl(37, 48%, 24%);
}

.score-band-032 {
  --score-hue: 38;
  background-color: hsl(38, 58%, 94%);
  color: hsl(38, 48%, 24%);
}

.score-band-033 {
  --score-hue: 40;
  background-color: hsl(40, 58%, 94%);
  color: hsl(40, 48%, 24%);
}

.score-band-034 {
  --score-hue: 41;
  background-color: hsl(41, 58%, 94%);
  color: hsl(41, 48%, 24%);
}

.score-band-035 {
  --score-hue: 42;
  background-color: hsl(42, 58%, 94%);
  color: hsl(42, 48%, 24%);
}

.score-band-036 {
  --score-hue: 43;
  background-color: hsl(43, 58%, 94%);
  color: hsl(43, 48%, 24%);
}

.score-band-037 {
  --score-hue: 44;
  background-color: hsl(44, 58%, 94%);
  color: hsl(44, 48%, 24%);
}

.score-band-038 {
  --score-hue: 46;
  background-color: hsl(46, 58%, 94%);
  color: hsl(46, 48%, 24%);
}

.score-band-039 {
  --score-hue: 47;
  background-color: hsl(47, 58%, 94%);
  color: hsl(47, 48%, 24%);
}

.score-band-040 {
  --score-hue: 48;
  background-color: hsl(48, 58%, 94%);
  color: hsl(48, 48%, 24%);
}

.score-band-041 {
  --score-hue: 49;
  background-color: hsl(49, 58%, 94%);
  color: hsl(49, 48%, 24%);
}

.score-band-042 {
  --score-hue: 50;
  background-color: hsl(50, 58%, 94%);
  color: hsl(50, 48%, 24%);
}

.score-band-043 {
  --score-hue: 52;
  background-color: hsl(52, 58%, 94%);
  color: hsl(52, 48%, 24%);
}

.score-band-044 {
  --score-hue: 53;
  background-color: hsl(53, 58%, 94%);
  color: hsl(53, 48%, 24%);
}

.score-band-045 {
  --score-hue: 54;
  background-color: hsl(54, 58%, 94%);
  color: hsl(54, 48%, 24%);
}

.score-band-046 {
  --score-hue: 55;
  background-color: hsl(55, 58%, 94%);
  color: hsl(55, 48%, 24%);
}

.score-band-047 {
  --score-hue: 56;
  background-color: hsl(56, 58%, 94%);
  color: hsl(56, 48%, 24%);
}

.score-band-048 {
  --score-hue: 58;
  background-color: hsl(58, 58%, 94%);
  color: hsl(58, 48%, 24%);
}

.score-band-049 {
  --score-hue: 59;
  background-color: hsl(59, 58%, 94%);
  color: hsl(59, 48%, 24%);
}

.score-band-050 {
  --score-hue: 60;
  background-color: hsl(60, 58%, 94%);
  color: hsl(60, 48%, 24%);
}

.score-band-051 {
  --score-hue: 61;
  background-color: hsl(61, 58%, 94%);
  color: hsl(61, 48%, 24%);
}

.score-band-052 {
  --score-hue: 62;
  background-color: hsl(62, 58%, 94%);
  color: hsl(62, 48%, 24%);
}

.score-band-053 {
  --score-hue: 64;
  background-color: hsl(64, 58%, 94%);
  color: hsl(64, 48%, 24%);
}

.score-band-054 {
  --score-hue: 65;
  background-color: hsl(65, 58%, 94%);
  color: hsl(65, 48%, 24%);
}

.score-band-055 {
  --score-hue: 66;
  background-color: hsl(66, 58%, 94%);
  color: hsl(66, 48%, 24%);
}

.score-band-056 {
  --score-hue: 67;
  background-color: hsl(67, 58%, 94%);
  color: hsl(67, 48%, 24%);
}

.score-band-057 {
  --score-hue: 68;
  background-color: hsl(68, 58%, 94%);
  color: hsl(68, 48%, 24%);
}

.score-band-058 {
  --score-hue: 70;
  background-color: hsl(70, 58%, 94%);
  color: hsl(70, 48%, 24%);
}

.score-band-059 {
  --score-hue: 71;
  background-color: hsl(71, 58%, 94%);
  color: hsl(71, 48%, 24%);
}

.score-band-060 {
  --score-hue: 72;
  background-color: hsl(72, 58%, 94%);
  color: hsl(72, 48%, 24%);
}

.score-band-061 {
  --score-hue: 73;
  background-color: hsl(73, 58%, 94%);
  color: hsl(73, 48%, 24%);
}

.score-band-062 {
  --score-hue: 74;
  background-color: hsl(74, 58%, 94%);
  color: hsl(74, 48%, 24%);
}

.score-band-063 {
  --score-hue: 76;
  background-color: hsl(76, 58%, 94%);
  color: hsl(76, 48%, 24%);
}

.score-band-064 {
  --score-hue: 77;
  background-color: hsl(77, 58%, 94%);
  color: hsl(77, 48%, 24%);
}

.score-band-065 {
  --score-hue: 78;
  background-color: hsl(78, 58%, 94%);
  color: hsl(78, 48%, 24%);
}

.score-band-066 {
  --score-hue: 79;
  background-color: hsl(79, 58%, 94%);
  color: hsl(79, 48%, 24%);
}

.score-band-067 {
  --score-hue: 80;
  background-color: hsl(80, 58%, 94%);
  color: hsl(80, 48%, 24%);
}

.score-band-068 {
  --score-hue: 82;
  background-color: hsl(82, 58%, 94%);
  color: hsl(82, 48%, 24%);
}

.score-band-069 {
  --score-hue: 83;
  background-color: hsl(83, 58%, 94%);
  color: hsl(83, 48%, 24%);
}

.score-band-070 {
  --score-hue: 84;
  background-color: hsl(84, 58%, 94%);
  color: hsl(84, 48%, 24%);
}

.score-band-071 {
  --score-hue: 85;
  background-color: hsl(85, 58%, 94%);
  color: hsl(85, 48%, 24%);
}

.score-band-072 {
  --score-hue: 86;
  background-color: hsl(86, 58%, 94%);
  color: hsl(86, 48%, 24%);
}

.score-band-073 {
  --score-hue: 88;
  background-color: hsl(88, 58%, 94%);
  color: hsl(88, 48%, 24%);
}

.score-band-074 {
  --score-hue: 89;
  background-color: hsl(89, 58%, 94%);
  color: hsl(89, 48%, 24%);
}

.score-band-075 {
  --score-hue: 90;
  background-color: hsl(90, 58%, 94%);
  color: hsl(90, 48%, 24%);
}

.score-band-076 {
  --score-hue: 91;
  background-color: hsl(91, 58%, 94%);
  color: hsl(91, 48%, 24%);
}

.score-band-077 {
  --score-hue: 92;
  background-color: hsl(92, 58%, 94%);
  color: hsl(92, 48%, 24%);
}

.score-band-078 {
  --score-hue: 94;
  background-color: hsl(94, 58%, 94%);
  color: hsl(94, 48%, 24%);
}

.score-band-079 {
  --score-hue: 95;
  background-color: hsl(95, 58%, 94%);
  color: hsl(95, 48%, 24%);
}

.score-band-080 {
  --score-hue: 96;
  background-color: hsl(96, 58%, 94%);
  color: hsl(96, 48%, 24%);
}

.score-band-081 {
  --score-hue: 97;
  background-color: hsl(97, 58%, 94%);
  color: hsl(97, 48%, 24%);
}

.score-band-082 {
  --score-hue: 98;
  background-color: hsl(98, 58%, 94%);
  color: hsl(98, 48%, 24%);
}

.score-band-083 {
  --score-hue: 100;
  background-color: hsl(100, 58%, 94%);
  color: hsl(100, 48%, 24%);
}

.score-band-084 {
  --score-hue: 101;
  background-color: hsl(101, 58%, 94%);
  color: hsl(101, 48%, 24%);
}

.score-band-085 {
  --score-hue: 102;
  background-color: hsl(102, 58%, 94%);
  color: hsl(102, 48%, 24%);
}

.score-band-086 {
  --score-hue: 103;
  background-color: hsl(103, 58%, 94%);
  color: hsl(103, 48%, 24%);
}

.score-band-087 {
  --score-hue: 104;
  background-color: hsl(104, 58%, 94%);
  color: hsl(104, 48%, 24%);
}

.score-band-088 {
  --score-hue: 106;
  background-color: hsl(106, 58%, 94%);
  color: hsl(106, 48%, 24%);
}

.score-band-089 {
  --score-hue: 107;
  background-color: hsl(107, 58%, 94%);
  color: hsl(107, 48%, 24%);
}

.score-band-090 {
  --score-hue: 108;
  background-color: hsl(108, 58%, 94%);
  color: hsl(108, 48%, 24%);
}

.score-band-091 {
  --score-hue: 109;
  background-color: hsl(109, 58%, 94%);
  color: hsl(109, 48%, 24%);
}

.score-band-092 {
  --score-hue: 110;
  background-color: hsl(110, 58%, 94%);
  color: hsl(110, 48%, 24%);
}

.score-band-093 {
  --score-hue: 112;
  background-color: hsl(112, 58%, 94%);
  color: hsl(112, 48%, 24%);
}

.score-band-094 {
  --score-hue: 113;
  background-color: hsl(113, 58%, 94%);
  color: hsl(113, 48%, 24%);
}

.score-band-095 {
  --score-hue: 114;
  background-color: hsl(114, 58%, 94%);
  color: hsl(114, 48%, 24%);
}

.score-band-096 {
  --score-hue: 115;
  background-color: hsl(115, 58%, 94%);
  color: hsl(115, 48%, 24%);
}

.score-band-097 {
  --score-hue: 116;
  background-color: hsl(116, 58%, 94%);
  color: hsl(116, 48%, 24%);
}

.score-band-098 {
  --score-hue: 118;
  background-color: hsl(118, 58%, 94%);
  color: hsl(118, 48%, 24%);
}

.score-band-099 {
  --score-hue: 119;
  background-color: hsl(119, 58%, 94%);
  color: hsl(119, 48%, 24%);
}

.score-band-100 {
  --score-hue: 120;
  background-color: hsl(120, 58%, 94%);
  color: hsl(120, 48%, 24%);
}

.duration-band-10 {
  --duration-weight: 11;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-11 {
  --duration-weight: 12;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-12 {
  --duration-weight: 13;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-13 {
  --duration-weight: 14;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-14 {
  --duration-weight: 16;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-15 {
  --duration-weight: 17;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-16 {
  --duration-weight: 18;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-17 {
  --duration-weight: 19;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-18 {
  --duration-weight: 20;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-19 {
  --duration-weight: 21;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-20 {
  --duration-weight: 22;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-21 {
  --duration-weight: 23;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-22 {
  --duration-weight: 24;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-23 {
  --duration-weight: 26;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-24 {
  --duration-weight: 27;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-25 {
  --duration-weight: 28;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-26 {
  --duration-weight: 29;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-27 {
  --duration-weight: 30;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-28 {
  --duration-weight: 31;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-29 {
  --duration-weight: 32;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-30 {
  --duration-weight: 33;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-31 {
  --duration-weight: 34;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-32 {
  --duration-weight: 36;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-33 {
  --duration-weight: 37;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-34 {
  --duration-weight: 38;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-35 {
  --duration-weight: 39;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-36 {
  --duration-weight: 40;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-37 {
  --duration-weight: 41;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-38 {
  --duration-weight: 42;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-39 {
  --duration-weight: 43;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-40 {
  --duration-weight: 44;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-41 {
  --duration-weight: 46;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-42 {
  --duration-weight: 47;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-43 {
  --duration-weight: 48;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-44 {
  --duration-weight: 49;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-45 {
  --duration-weight: 50;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-46 {
  --duration-weight: 51;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-47 {
  --duration-weight: 52;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-48 {
  --duration-weight: 53;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-49 {
  --duration-weight: 54;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-50 {
  --duration-weight: 56;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-51 {
  --duration-weight: 57;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-52 {
  --duration-weight: 58;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-53 {
  --duration-weight: 59;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-54 {
  --duration-weight: 60;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-55 {
  --duration-weight: 61;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-56 {
  --duration-weight: 62;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-57 {
  --duration-weight: 63;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-58 {
  --duration-weight: 64;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-59 {
  --duration-weight: 66;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-60 {
  --duration-weight: 67;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-61 {
  --duration-weight: 68;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-62 {
  --duration-weight: 69;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-63 {
  --duration-weight: 70;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-64 {
  --duration-weight: 71;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-65 {
  --duration-weight: 72;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-66 {
  --duration-weight: 73;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-67 {
  --duration-weight: 74;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-68 {
  --duration-weight: 76;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-69 {
  --duration-weight: 77;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-70 {
  --duration-weight: 78;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-71 {
  --duration-weight: 79;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-72 {
  --duration-weight: 80;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-73 {
  --duration-weight: 81;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-74 {
  --duration-weight: 82;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-75 {
  --duration-weight: 83;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-76 {
  --duration-weight: 84;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-77 {
  --duration-weight: 86;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-78 {
  --duration-weight: 87;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-79 {
  --duration-weight: 88;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-80 {
  --duration-weight: 89;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-81 {
  --duration-weight: 90;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-82 {
  --duration-weight: 91;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-83 {
  --duration-weight: 92;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-84 {
  --duration-weight: 93;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-85 {
  --duration-weight: 94;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-86 {
  --duration-weight: 96;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-87 {
  --duration-weight: 97;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-88 {
  --duration-weight: 98;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-89 {
  --duration-weight: 99;
  font-variation-settings: "wght" var(--duration-weight);
}

.duration-band-90 {
  --duration-weight: 100;
  font-variation-settings: "wght" var(--duration-weight);
}

.owner-maya {
  align-items: center;
  display: inline-flex;
  gap: 6px;
}

.owner-jon {
  align-items: center;
  display: inline-flex;
  gap: 6px;
}

.owner-sam {
  align-items: center;
  display: inline-flex;
  gap: 6px;
}

.owner-priya {
  align-items: center;
  display: inline-flex;
  gap: 6px;
}

@media (max-width: 720px) {
  .sales-replay-dashboard {
    padding: 20px;
  }

  .sales-replay-dashboard table {
    display: block;
    overflow-x: auto;
  }
}
`;

export function wrapDashboardDocument(markup: string): string {
  return [
    "<!doctype html>",
    "<html lang=\"en\">",
    "<head>",
    "<meta charset=\"utf-8\">",
    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
    "<title>Sales replay dashboard</title>",
    `<style>${dashboardThemeCss}</style>`,
    "</head>",
    "<body>",
    markup,
    "</body>",
    "</html>",
  ].join("\n");
}
