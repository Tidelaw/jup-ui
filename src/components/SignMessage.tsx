import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import { useEffect } from 'react';
import dynamic from "next/dynamic";

const WalletMultiButtonDynamic = dynamic(
    async () =>
        (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
);

export default function SignMessage () {
    
    const wallet = useWallet();

    return (
        <div className="flex flex-row justify-center">
            <div className="relative group items-center">
                <WalletMultiButtonDynamic
                    // disabled={!publicKey}
                    className='relative z-10 bg-accent hover:bg-zinc-900 hover:opacity-100 duration-200 animate-fade' />
            </div>
        </div>
    );
};