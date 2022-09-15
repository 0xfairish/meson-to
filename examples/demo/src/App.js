import React from 'react'

import { MesonToButton } from '@mesonfi/to/react'

import { ReactComponent as MesonIcon } from './meson.svg'
import popup from './popup.jpg'

export default function App(props) {
  const [received, setReceived] = React.useState()

  const onCompleted = React.useCallback(data => {
    setReceived(
      <a className='flex items-center hover:underline' href={`https://explorer.meson.fi/swap/${data.swapId}`} target='_blank' rel="noreferrer">
        {data.amount / 1e6} {data.from.token} transferred to <img className='h-4 ml-2 mr-1' src='/icon192.png' alt='' />Example Web3 App
      </a>
    )
  }, [])

  return (
    <div className='w-full min-h-full bg-indigo-50 flex flex-col'>
      <header className='flex flex-row items-center w-full px-4 sm:px-6 py-2'>
        <img className='h-8 mr-2' src='/icon192.png' alt='' />
        <div>
          <div className='text-lg'>Example Web3 App</div>
          <div className='text-xs font-light text-gray'>
            A demo to demonstrate cross-chain deposit with meson
          </div>
        </div>
      </header>

      <div className='my-4 md:mt-6 mx-4 sm:mx-6 md:mx-8 max-w-[960px] self-center grid grid-flow-row-dense md:grid-cols-5'>
        <div className='md:col-span-3 md:mt-[64px] lg:mt-[108px] mb-3 md:pr-8'>
          <div className='font-semibold text-2xl mb-2'>
            Make Cross-chain Deposit
          </div>
          <div className='block text-base'>
            to any web3 apps with almost zero fee & slippage.
          </div>
        </div>

        <div className='md:row-span-4 md:col-span-2 flex flex-col items-center p-5'>
          <img className='w-[320px] md:w-[280px] md:min-w-[280px] lg:w-[320px] border-[0.5px] border-[#d2d6d6] rounded-xl shadow-[0_5px_40px_-10px_rgba(0,0,0,0.2)]' src={popup} alt='meson.to popup' />
        </div>

        <div className='md:col-span-3 mt-3 md:mt-8 md:pr-8 flex flex-col items-start'>
          <div className='font-semibold text-2xl mb-2'>
            How does this demo work?
          </div>
          <ol className='list-decimal ml-6 mb-2'>
            <li>Click the <i>Deposit with meson</i> button below</li>
            <li>Complete cross-chain transfer in the popup window</li>
          </ol>
          <div>
            In this demo, you can use stablecoins from any chain and transfer them directly to app's smart contract on Polygon.
            This example contract will forward receiving tokens to the sender's address on Polygon.
            {/* See an example transaction <a className='text-indigo-500 hover:underline cursor' target='_black' href='https://polygonscan.com/tx/0xe4c4d836a8b099c39c74b85ab65c632b6908146eedbf69095647907dbb180fa9'>here</a>. */}
          </div>
          <div>
            <MesonToButton appId='example' onCompleted={onCompleted} className='mt-4 lg:mt-6'>
              <ButtonText />
            </MesonToButton>
          </div>
          <div className='mt-3 text-gray-500'>{received}</div>
        </div>
      </div>

      <div className='flex-1' />
      <div className='self-center my-4 flex items-center text-gray-400 text-sm'>
        Powered by
        <a className='opacity-50 hover:opacity-80' href='https://meson.fi' target='_blank' rel="noreferrer">
          <MesonIcon className='ml-1.5 w-[80px]' />
        </a>
      </div>
    </div>
  )
}

function ButtonText ({ pending }) {
  return pending ? 'Waiting for meson' : 'Deposit with meson'
}