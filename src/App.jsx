import { useState } from 'react'
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { airdrop } from './airdrop';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <WalletMultiButton></WalletMultiButton>
                  <WalletDisconnectButton></WalletDisconnectButton>
                  <div>
                    hi there <b>hello</b>
                  </div>
                  <airdrop />
                </WalletModalProvider>
            </WalletProvider>
      </ConnectionProvider>
  )
}

export default App
