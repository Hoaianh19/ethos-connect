import { JsonRpcProvider } from '@mysten/sui.js';
import type { WalletAdapter } from "@mysten/wallet-adapter-base";
import { Wallet } from './Wallet';
import { EthosConnectStatus } from '../enums/EthosConnectStatus';
import { WalletAccount } from '@mysten/wallet-standard';

export type WalletContextContents = {
    wallets?: WalletAdapter[],
    selectWallet?: ((walletName: string) => void),
    status: EthosConnectStatus,
    provider: JsonRpcProvider | null,
    wallet?: Wallet;
    altAccount?: WalletAccount;
    setAltAccount: (_account: WalletAccount) => void;
}