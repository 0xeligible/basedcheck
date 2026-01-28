"use client";

import { createWalletClient, custom } from "viem";
import { base } from "viem/chains";
import { useState } from "react";

export default function ConnectPage() {
  const [address, setAddress] = useState("");

  async function connect() {
    if (!window.ethereum) {
      alert("Wallet not found");
      return;
    }

    const client = createWalletClient({
      chain: base,
      transport: custom(window.ethereum),
    });

    const [addr] = await client.requestAddresses();
    setAddress(addr);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Connect Base Wallet</h1>
      <button onClick={connect}>Connect</button>
      {address && <p>Connected: {address}</p>}
    </div>
  );
}

