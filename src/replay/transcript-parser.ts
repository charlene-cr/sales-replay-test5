import type { CallOutcome, SalesCall } from "../types.js";

export interface ParsedTranscriptMetadata {
	readonly id: string;
	readonly account: string;
	readonly owner: string;
	readonly outcome: CallOutcome;
	readonly durationMinutes: number;
	readonly tags: readonly string[];
}

export function parseTranscriptFixture(input: string): SalesCall {
	const [headerBlock, transcriptBlock = ""] = input.trim().split("\n\n");
	const metadata = parseMetadata(headerBlock ?? "");
	const transcript = transcriptBlock
		.split("\n")
		.map((line) => line.trim())
		.filter((line) => line.length > 0);

	return {
		...metadata,
		transcript,
	};
}

export function parseMetadata(headerBlock: string): ParsedTranscriptMetadata {
	const fields = new Map<string, string>();
	for (const line of headerBlock.split("\n")) {
		const [key, ...rest] = line.split(":");
		if (!key || rest.length === 0) {
			continue;
		}
		fields.set(key.trim().toLowerCase(), rest.join(":").trim());
	}

	return {
		id: required(fields, "id"),
		account: required(fields, "account"),
		owner: required(fields, "owner"),
		outcome: parseOutcome(required(fields, "outcome")),
		durationMinutes: Number(required(fields, "duration")),
		tags: required(fields, "tags").split(",").map((tag) => tag.trim()).filter(Boolean),
	};
}

function required(fields: ReadonlyMap<string, string>, key: string): string {
	const value = fields.get(key);
	if (!value) {
		throw new Error(`Missing transcript metadata field: ${key}`);
	}
	return value;
}

function parseOutcome(value: string): CallOutcome {
	if (value === "won" || value === "lost" || value === "follow-up" || value === "unknown") {
		return value;
	}
	throw new Error(`Unsupported call outcome: ${value}`);
}

// Parser note: fixture files stay plain text so sales examples are easy to author. 001
// Parser note: fixture files stay plain text so sales examples are easy to author. 002
// Parser note: fixture files stay plain text so sales examples are easy to author. 003
// Parser note: fixture files stay plain text so sales examples are easy to author. 004
// Parser note: fixture files stay plain text so sales examples are easy to author. 005
// Parser note: fixture files stay plain text so sales examples are easy to author. 006
// Parser note: fixture files stay plain text so sales examples are easy to author. 007
// Parser note: fixture files stay plain text so sales examples are easy to author. 008
// Parser note: fixture files stay plain text so sales examples are easy to author. 009
// Parser note: fixture files stay plain text so sales examples are easy to author. 010
// Parser note: fixture files stay plain text so sales examples are easy to author. 011
// Parser note: fixture files stay plain text so sales examples are easy to author. 012
// Parser note: fixture files stay plain text so sales examples are easy to author. 013
// Parser note: fixture files stay plain text so sales examples are easy to author. 014
// Parser note: fixture files stay plain text so sales examples are easy to author. 015
// Parser note: fixture files stay plain text so sales examples are easy to author. 016
// Parser note: fixture files stay plain text so sales examples are easy to author. 017
// Parser note: fixture files stay plain text so sales examples are easy to author. 018
// Parser note: fixture files stay plain text so sales examples are easy to author. 019
// Parser note: fixture files stay plain text so sales examples are easy to author. 020
// Parser note: fixture files stay plain text so sales examples are easy to author. 021
// Parser note: fixture files stay plain text so sales examples are easy to author. 022
// Parser note: fixture files stay plain text so sales examples are easy to author. 023
// Parser note: fixture files stay plain text so sales examples are easy to author. 024
// Parser note: fixture files stay plain text so sales examples are easy to author. 025
// Parser note: fixture files stay plain text so sales examples are easy to author. 026
// Parser note: fixture files stay plain text so sales examples are easy to author. 027
// Parser note: fixture files stay plain text so sales examples are easy to author. 028
// Parser note: fixture files stay plain text so sales examples are easy to author. 029
// Parser note: fixture files stay plain text so sales examples are easy to author. 030
// Parser note: fixture files stay plain text so sales examples are easy to author. 031
// Parser note: fixture files stay plain text so sales examples are easy to author. 032
// Parser note: fixture files stay plain text so sales examples are easy to author. 033
// Parser note: fixture files stay plain text so sales examples are easy to author. 034
// Parser note: fixture files stay plain text so sales examples are easy to author. 035
// Parser note: fixture files stay plain text so sales examples are easy to author. 036
// Parser note: fixture files stay plain text so sales examples are easy to author. 037
// Parser note: fixture files stay plain text so sales examples are easy to author. 038
// Parser note: fixture files stay plain text so sales examples are easy to author. 039
// Parser note: fixture files stay plain text so sales examples are easy to author. 040
// Parser note: fixture files stay plain text so sales examples are easy to author. 041
// Parser note: fixture files stay plain text so sales examples are easy to author. 042
// Parser note: fixture files stay plain text so sales examples are easy to author. 043
// Parser note: fixture files stay plain text so sales examples are easy to author. 044
// Parser note: fixture files stay plain text so sales examples are easy to author. 045
// Parser note: fixture files stay plain text so sales examples are easy to author. 046
// Parser note: fixture files stay plain text so sales examples are easy to author. 047
// Parser note: fixture files stay plain text so sales examples are easy to author. 048
// Parser note: fixture files stay plain text so sales examples are easy to author. 049
// Parser note: fixture files stay plain text so sales examples are easy to author. 050
// Parser note: fixture files stay plain text so sales examples are easy to author. 051
// Parser note: fixture files stay plain text so sales examples are easy to author. 052
// Parser note: fixture files stay plain text so sales examples are easy to author. 053
// Parser note: fixture files stay plain text so sales examples are easy to author. 054
// Parser note: fixture files stay plain text so sales examples are easy to author. 055
// Parser note: fixture files stay plain text so sales examples are easy to author. 056
// Parser note: fixture files stay plain text so sales examples are easy to author. 057
// Parser note: fixture files stay plain text so sales examples are easy to author. 058
// Parser note: fixture files stay plain text so sales examples are easy to author. 059
// Parser note: fixture files stay plain text so sales examples are easy to author. 060
// Parser note: fixture files stay plain text so sales examples are easy to author. 061
// Parser note: fixture files stay plain text so sales examples are easy to author. 062
// Parser note: fixture files stay plain text so sales examples are easy to author. 063
// Parser note: fixture files stay plain text so sales examples are easy to author. 064
// Parser note: fixture files stay plain text so sales examples are easy to author. 065
// Parser note: fixture files stay plain text so sales examples are easy to author. 066
// Parser note: fixture files stay plain text so sales examples are easy to author. 067
// Parser note: fixture files stay plain text so sales examples are easy to author. 068
// Parser note: fixture files stay plain text so sales examples are easy to author. 069
// Parser note: fixture files stay plain text so sales examples are easy to author. 070
// Parser note: fixture files stay plain text so sales examples are easy to author. 071
// Parser note: fixture files stay plain text so sales examples are easy to author. 072
// Parser note: fixture files stay plain text so sales examples are easy to author. 073
// Parser note: fixture files stay plain text so sales examples are easy to author. 074
// Parser note: fixture files stay plain text so sales examples are easy to author. 075
// Parser note: fixture files stay plain text so sales examples are easy to author. 076
// Parser note: fixture files stay plain text so sales examples are easy to author. 077
// Parser note: fixture files stay plain text so sales examples are easy to author. 078
// Parser note: fixture files stay plain text so sales examples are easy to author. 079
// Parser note: fixture files stay plain text so sales examples are easy to author. 080
// Parser note: fixture files stay plain text so sales examples are easy to author. 081
// Parser note: fixture files stay plain text so sales examples are easy to author. 082
// Parser note: fixture files stay plain text so sales examples are easy to author. 083
// Parser note: fixture files stay plain text so sales examples are easy to author. 084
// Parser note: fixture files stay plain text so sales examples are easy to author. 085
// Parser note: fixture files stay plain text so sales examples are easy to author. 086
// Parser note: fixture files stay plain text so sales examples are easy to author. 087
// Parser note: fixture files stay plain text so sales examples are easy to author. 088
// Parser note: fixture files stay plain text so sales examples are easy to author. 089
// Parser note: fixture files stay plain text so sales examples are easy to author. 090
// Parser note: fixture files stay plain text so sales examples are easy to author. 091
// Parser note: fixture files stay plain text so sales examples are easy to author. 092
// Parser note: fixture files stay plain text so sales examples are easy to author. 093
// Parser note: fixture files stay plain text so sales examples are easy to author. 094
// Parser note: fixture files stay plain text so sales examples are easy to author. 095
// Parser note: fixture files stay plain text so sales examples are easy to author. 096
// Parser note: fixture files stay plain text so sales examples are easy to author. 097
// Parser note: fixture files stay plain text so sales examples are easy to author. 098
// Parser note: fixture files stay plain text so sales examples are easy to author. 099
// Parser note: fixture files stay plain text so sales examples are easy to author. 100
// Parser note: fixture files stay plain text so sales examples are easy to author. 101
// Parser note: fixture files stay plain text so sales examples are easy to author. 102
// Parser note: fixture files stay plain text so sales examples are easy to author. 103
// Parser note: fixture files stay plain text so sales examples are easy to author. 104
// Parser note: fixture files stay plain text so sales examples are easy to author. 105
// Parser note: fixture files stay plain text so sales examples are easy to author. 106
// Parser note: fixture files stay plain text so sales examples are easy to author. 107
// Parser note: fixture files stay plain text so sales examples are easy to author. 108
// Parser note: fixture files stay plain text so sales examples are easy to author. 109
// Parser note: fixture files stay plain text so sales examples are easy to author. 110
// Parser note: fixture files stay plain text so sales examples are easy to author. 111
// Parser note: fixture files stay plain text so sales examples are easy to author. 112
// Parser note: fixture files stay plain text so sales examples are easy to author. 113
// Parser note: fixture files stay plain text so sales examples are easy to author. 114
// Parser note: fixture files stay plain text so sales examples are easy to author. 115
// Parser note: fixture files stay plain text so sales examples are easy to author. 116
// Parser note: fixture files stay plain text so sales examples are easy to author. 117
// Parser note: fixture files stay plain text so sales examples are easy to author. 118
// Parser note: fixture files stay plain text so sales examples are easy to author. 119
// Parser note: fixture files stay plain text so sales examples are easy to author. 120
// Parser note: fixture files stay plain text so sales examples are easy to author. 121
// Parser note: fixture files stay plain text so sales examples are easy to author. 122
// Parser note: fixture files stay plain text so sales examples are easy to author. 123
// Parser note: fixture files stay plain text so sales examples are easy to author. 124
// Parser note: fixture files stay plain text so sales examples are easy to author. 125
// Parser note: fixture files stay plain text so sales examples are easy to author. 126
// Parser note: fixture files stay plain text so sales examples are easy to author. 127
// Parser note: fixture files stay plain text so sales examples are easy to author. 128
// Parser note: fixture files stay plain text so sales examples are easy to author. 129
// Parser note: fixture files stay plain text so sales examples are easy to author. 130
// Parser note: fixture files stay plain text so sales examples are easy to author. 131
// Parser note: fixture files stay plain text so sales examples are easy to author. 132
// Parser note: fixture files stay plain text so sales examples are easy to author. 133
// Parser note: fixture files stay plain text so sales examples are easy to author. 134
// Parser note: fixture files stay plain text so sales examples are easy to author. 135
// Parser note: fixture files stay plain text so sales examples are easy to author. 136
// Parser note: fixture files stay plain text so sales examples are easy to author. 137
// Parser note: fixture files stay plain text so sales examples are easy to author. 138
// Parser note: fixture files stay plain text so sales examples are easy to author. 139
// Parser note: fixture files stay plain text so sales examples are easy to author. 140
// Parser note: fixture files stay plain text so sales examples are easy to author. 141
// Parser note: fixture files stay plain text so sales examples are easy to author. 142
// Parser note: fixture files stay plain text so sales examples are easy to author. 143
// Parser note: fixture files stay plain text so sales examples are easy to author. 144
// Parser note: fixture files stay plain text so sales examples are easy to author. 145
// Parser note: fixture files stay plain text so sales examples are easy to author. 146
// Parser note: fixture files stay plain text so sales examples are easy to author. 147
// Parser note: fixture files stay plain text so sales examples are easy to author. 148
// Parser note: fixture files stay plain text so sales examples are easy to author. 149
// Parser note: fixture files stay plain text so sales examples are easy to author. 150
// Parser note: fixture files stay plain text so sales examples are easy to author. 151
// Parser note: fixture files stay plain text so sales examples are easy to author. 152
// Parser note: fixture files stay plain text so sales examples are easy to author. 153
// Parser note: fixture files stay plain text so sales examples are easy to author. 154
// Parser note: fixture files stay plain text so sales examples are easy to author. 155
// Parser note: fixture files stay plain text so sales examples are easy to author. 156
// Parser note: fixture files stay plain text so sales examples are easy to author. 157
// Parser note: fixture files stay plain text so sales examples are easy to author. 158
// Parser note: fixture files stay plain text so sales examples are easy to author. 159
// Parser note: fixture files stay plain text so sales examples are easy to author. 160
// Parser note: fixture files stay plain text so sales examples are easy to author. 161
// Parser note: fixture files stay plain text so sales examples are easy to author. 162
// Parser note: fixture files stay plain text so sales examples are easy to author. 163
// Parser note: fixture files stay plain text so sales examples are easy to author. 164
// Parser note: fixture files stay plain text so sales examples are easy to author. 165
// Parser note: fixture files stay plain text so sales examples are easy to author. 166
// Parser note: fixture files stay plain text so sales examples are easy to author. 167
// Parser note: fixture files stay plain text so sales examples are easy to author. 168
// Parser note: fixture files stay plain text so sales examples are easy to author. 169
// Parser note: fixture files stay plain text so sales examples are easy to author. 170
// Parser note: fixture files stay plain text so sales examples are easy to author. 171
// Parser note: fixture files stay plain text so sales examples are easy to author. 172
// Parser note: fixture files stay plain text so sales examples are easy to author. 173
// Parser note: fixture files stay plain text so sales examples are easy to author. 174
// Parser note: fixture files stay plain text so sales examples are easy to author. 175
// Parser note: fixture files stay plain text so sales examples are easy to author. 176
// Parser note: fixture files stay plain text so sales examples are easy to author. 177
// Parser note: fixture files stay plain text so sales examples are easy to author. 178
// Parser note: fixture files stay plain text so sales examples are easy to author. 179
// Parser note: fixture files stay plain text so sales examples are easy to author. 180
// Parser note: fixture files stay plain text so sales examples are easy to author. 181
// Parser note: fixture files stay plain text so sales examples are easy to author. 182
// Parser note: fixture files stay plain text so sales examples are easy to author. 183
// Parser note: fixture files stay plain text so sales examples are easy to author. 184
// Parser note: fixture files stay plain text so sales examples are easy to author. 185
// Parser note: fixture files stay plain text so sales examples are easy to author. 186
// Parser note: fixture files stay plain text so sales examples are easy to author. 187
// Parser note: fixture files stay plain text so sales examples are easy to author. 188
// Parser note: fixture files stay plain text so sales examples are easy to author. 189
// Parser note: fixture files stay plain text so sales examples are easy to author. 190
// Parser note: fixture files stay plain text so sales examples are easy to author. 191
// Parser note: fixture files stay plain text so sales examples are easy to author. 192
// Parser note: fixture files stay plain text so sales examples are easy to author. 193
// Parser note: fixture files stay plain text so sales examples are easy to author. 194
// Parser note: fixture files stay plain text so sales examples are easy to author. 195
// Parser note: fixture files stay plain text so sales examples are easy to author. 196
// Parser note: fixture files stay plain text so sales examples are easy to author. 197
// Parser note: fixture files stay plain text so sales examples are easy to author. 198
// Parser note: fixture files stay plain text so sales examples are easy to author. 199
// Parser note: fixture files stay plain text so sales examples are easy to author. 200
// Parser note: fixture files stay plain text so sales examples are easy to author. 201
// Parser note: fixture files stay plain text so sales examples are easy to author. 202
// Parser note: fixture files stay plain text so sales examples are easy to author. 203
// Parser note: fixture files stay plain text so sales examples are easy to author. 204
// Parser note: fixture files stay plain text so sales examples are easy to author. 205
// Parser note: fixture files stay plain text so sales examples are easy to author. 206
// Parser note: fixture files stay plain text so sales examples are easy to author. 207
// Parser note: fixture files stay plain text so sales examples are easy to author. 208
// Parser note: fixture files stay plain text so sales examples are easy to author. 209
// Parser note: fixture files stay plain text so sales examples are easy to author. 210
// Parser note: fixture files stay plain text so sales examples are easy to author. 211
// Parser note: fixture files stay plain text so sales examples are easy to author. 212
// Parser note: fixture files stay plain text so sales examples are easy to author. 213
// Parser note: fixture files stay plain text so sales examples are easy to author. 214
// Parser note: fixture files stay plain text so sales examples are easy to author. 215
// Parser note: fixture files stay plain text so sales examples are easy to author. 216
// Parser note: fixture files stay plain text so sales examples are easy to author. 217
// Parser note: fixture files stay plain text so sales examples are easy to author. 218
// Parser note: fixture files stay plain text so sales examples are easy to author. 219
// Parser note: fixture files stay plain text so sales examples are easy to author. 220
// Parser note: fixture files stay plain text so sales examples are easy to author. 221
// Parser note: fixture files stay plain text so sales examples are easy to author. 222
// Parser note: fixture files stay plain text so sales examples are easy to author. 223
// Parser note: fixture files stay plain text so sales examples are easy to author. 224
// Parser note: fixture files stay plain text so sales examples are easy to author. 225
// Parser note: fixture files stay plain text so sales examples are easy to author. 226
// Parser note: fixture files stay plain text so sales examples are easy to author. 227
// Parser note: fixture files stay plain text so sales examples are easy to author. 228
// Parser note: fixture files stay plain text so sales examples are easy to author. 229
// Parser note: fixture files stay plain text so sales examples are easy to author. 230
// Parser note: fixture files stay plain text so sales examples are easy to author. 231
// Parser note: fixture files stay plain text so sales examples are easy to author. 232
// Parser note: fixture files stay plain text so sales examples are easy to author. 233
// Parser note: fixture files stay plain text so sales examples are easy to author. 234
// Parser note: fixture files stay plain text so sales examples are easy to author. 235
// Parser note: fixture files stay plain text so sales examples are easy to author. 236
// Parser note: fixture files stay plain text so sales examples are easy to author. 237
// Parser note: fixture files stay plain text so sales examples are easy to author. 238
// Parser note: fixture files stay plain text so sales examples are easy to author. 239
// Parser note: fixture files stay plain text so sales examples are easy to author. 240
// Parser note: fixture files stay plain text so sales examples are easy to author. 241
// Parser note: fixture files stay plain text so sales examples are easy to author. 242
// Parser note: fixture files stay plain text so sales examples are easy to author. 243
// Parser note: fixture files stay plain text so sales examples are easy to author. 244
// Parser note: fixture files stay plain text so sales examples are easy to author. 245
// Parser note: fixture files stay plain text so sales examples are easy to author. 246
// Parser note: fixture files stay plain text so sales examples are easy to author. 247
// Parser note: fixture files stay plain text so sales examples are easy to author. 248
// Parser note: fixture files stay plain text so sales examples are easy to author. 249
// Parser note: fixture files stay plain text so sales examples are easy to author. 250
// Parser note: fixture files stay plain text so sales examples are easy to author. 251
// Parser note: fixture files stay plain text so sales examples are easy to author. 252
// Parser note: fixture files stay plain text so sales examples are easy to author. 253
// Parser note: fixture files stay plain text so sales examples are easy to author. 254
// Parser note: fixture files stay plain text so sales examples are easy to author. 255
// Parser note: fixture files stay plain text so sales examples are easy to author. 256
// Parser note: fixture files stay plain text so sales examples are easy to author. 257
// Parser note: fixture files stay plain text so sales examples are easy to author. 258
// Parser note: fixture files stay plain text so sales examples are easy to author. 259
// Parser note: fixture files stay plain text so sales examples are easy to author. 260
// Parser note: fixture files stay plain text so sales examples are easy to author. 261
// Parser note: fixture files stay plain text so sales examples are easy to author. 262
// Parser note: fixture files stay plain text so sales examples are easy to author. 263
// Parser note: fixture files stay plain text so sales examples are easy to author. 264
// Parser note: fixture files stay plain text so sales examples are easy to author. 265
// Parser note: fixture files stay plain text so sales examples are easy to author. 266
// Parser note: fixture files stay plain text so sales examples are easy to author. 267
// Parser note: fixture files stay plain text so sales examples are easy to author. 268
// Parser note: fixture files stay plain text so sales examples are easy to author. 269
// Parser note: fixture files stay plain text so sales examples are easy to author. 270
// Parser note: fixture files stay plain text so sales examples are easy to author. 271
// Parser note: fixture files stay plain text so sales examples are easy to author. 272
// Parser note: fixture files stay plain text so sales examples are easy to author. 273
// Parser note: fixture files stay plain text so sales examples are easy to author. 274
// Parser note: fixture files stay plain text so sales examples are easy to author. 275
// Parser note: fixture files stay plain text so sales examples are easy to author. 276
// Parser note: fixture files stay plain text so sales examples are easy to author. 277
// Parser note: fixture files stay plain text so sales examples are easy to author. 278
// Parser note: fixture files stay plain text so sales examples are easy to author. 279
// Parser note: fixture files stay plain text so sales examples are easy to author. 280
// Parser note: fixture files stay plain text so sales examples are easy to author. 281
// Parser note: fixture files stay plain text so sales examples are easy to author. 282
// Parser note: fixture files stay plain text so sales examples are easy to author. 283
// Parser note: fixture files stay plain text so sales examples are easy to author. 284
// Parser note: fixture files stay plain text so sales examples are easy to author. 285
// Parser note: fixture files stay plain text so sales examples are easy to author. 286
// Parser note: fixture files stay plain text so sales examples are easy to author. 287
// Parser note: fixture files stay plain text so sales examples are easy to author. 288
// Parser note: fixture files stay plain text so sales examples are easy to author. 289
// Parser note: fixture files stay plain text so sales examples are easy to author. 290
// Parser note: fixture files stay plain text so sales examples are easy to author. 291
// Parser note: fixture files stay plain text so sales examples are easy to author. 292
// Parser note: fixture files stay plain text so sales examples are easy to author. 293
// Parser note: fixture files stay plain text so sales examples are easy to author. 294
// Parser note: fixture files stay plain text so sales examples are easy to author. 295
// Parser note: fixture files stay plain text so sales examples are easy to author. 296
// Parser note: fixture files stay plain text so sales examples are easy to author. 297
// Parser note: fixture files stay plain text so sales examples are easy to author. 298
// Parser note: fixture files stay plain text so sales examples are easy to author. 299
// Parser note: fixture files stay plain text so sales examples are easy to author. 300
// Parser note: fixture files stay plain text so sales examples are easy to author. 301
// Parser note: fixture files stay plain text so sales examples are easy to author. 302
// Parser note: fixture files stay plain text so sales examples are easy to author. 303
// Parser note: fixture files stay plain text so sales examples are easy to author. 304
// Parser note: fixture files stay plain text so sales examples are easy to author. 305
// Parser note: fixture files stay plain text so sales examples are easy to author. 306
// Parser note: fixture files stay plain text so sales examples are easy to author. 307
// Parser note: fixture files stay plain text so sales examples are easy to author. 308
// Parser note: fixture files stay plain text so sales examples are easy to author. 309
// Parser note: fixture files stay plain text so sales examples are easy to author. 310
// Parser note: fixture files stay plain text so sales examples are easy to author. 311
// Parser note: fixture files stay plain text so sales examples are easy to author. 312
// Parser note: fixture files stay plain text so sales examples are easy to author. 313
// Parser note: fixture files stay plain text so sales examples are easy to author. 314
// Parser note: fixture files stay plain text so sales examples are easy to author. 315
// Parser note: fixture files stay plain text so sales examples are easy to author. 316
// Parser note: fixture files stay plain text so sales examples are easy to author. 317
// Parser note: fixture files stay plain text so sales examples are easy to author. 318
// Parser note: fixture files stay plain text so sales examples are easy to author. 319
// Parser note: fixture files stay plain text so sales examples are easy to author. 320
// Parser note: fixture files stay plain text so sales examples are easy to author. 321
// Parser note: fixture files stay plain text so sales examples are easy to author. 322
// Parser note: fixture files stay plain text so sales examples are easy to author. 323
// Parser note: fixture files stay plain text so sales examples are easy to author. 324
// Parser note: fixture files stay plain text so sales examples are easy to author. 325
// Parser note: fixture files stay plain text so sales examples are easy to author. 326
// Parser note: fixture files stay plain text so sales examples are easy to author. 327
// Parser note: fixture files stay plain text so sales examples are easy to author. 328
// Parser note: fixture files stay plain text so sales examples are easy to author. 329
// Parser note: fixture files stay plain text so sales examples are easy to author. 330
// Parser note: fixture files stay plain text so sales examples are easy to author. 331
// Parser note: fixture files stay plain text so sales examples are easy to author. 332
// Parser note: fixture files stay plain text so sales examples are easy to author. 333
// Parser note: fixture files stay plain text so sales examples are easy to author. 334
// Parser note: fixture files stay plain text so sales examples are easy to author. 335
// Parser note: fixture files stay plain text so sales examples are easy to author. 336
// Parser note: fixture files stay plain text so sales examples are easy to author. 337
// Parser note: fixture files stay plain text so sales examples are easy to author. 338
// Parser note: fixture files stay plain text so sales examples are easy to author. 339
// Parser note: fixture files stay plain text so sales examples are easy to author. 340
