/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Serializer, f64, struct } from '@metaplex-foundation/umi/serializers';

export type LiquidationBalances = {
  liquidateeAssetBalance: number;
  liquidateeLiabilityBalance: number;
  liquidatorAssetBalance: number;
  liquidatorLiabilityBalance: number;
};

export type LiquidationBalancesArgs = LiquidationBalances;

export function getLiquidationBalancesSerializer(): Serializer<
  LiquidationBalancesArgs,
  LiquidationBalances
> {
  return struct<LiquidationBalances>(
    [
      ['liquidateeAssetBalance', f64()],
      ['liquidateeLiabilityBalance', f64()],
      ['liquidatorAssetBalance', f64()],
      ['liquidatorLiabilityBalance', f64()],
    ],
    { description: 'LiquidationBalances' }
  ) as Serializer<LiquidationBalancesArgs, LiquidationBalances>;
}
