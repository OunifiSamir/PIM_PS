import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";
import React from "react";
import Admin from "layouts/Admin.js";


const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function facture() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr")
    });
  };

  return (
    <form className="m-6" onSubmit={handleSubmit}>
      <div className="credit-card w-full  py-16 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
        <main className="mt-4 p-4 ">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
             ETH payment
          </h1>
          <div className="">
            <div className="my-6">
              <input
                type="text"
                name="addr"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder=" Address salariee"
              />
            </div>
            <div className="my-6">
              <input
                name="ether"
                type="text"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Montant par ETH"
              />
            </div>
          </div>
        </main>
        <footer className="p-8">
          <button
            type="submit"
            className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
          >
            Envoyee 
          </button>
          <ErrorMessage message={error} />
          <TxList txs={txs} />
        </footer>
      </div>
    </form>
  );
}

facture.layout = Admin;



