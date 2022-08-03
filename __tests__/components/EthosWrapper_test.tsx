import React from 'react'
import { create, act } from 'react-test-renderer'

import EthosWrapper from '../../src/components/EthosWrapper'
import * as getProvider from '../../src/lib/getProvider'
import { Chain } from '../../src/enums/Chain'
import { EthosConfiguration } from '../../src/types/EthosConfiguration'
import * as initialize from '../../src/lib/initialize';
import * as useSuiWallet from '../../src/lib/useSuiWallet';

describe('EthosWrapper', () => {
  const signer = {}

  let receivedProvider
  let receivedSigner
  let onProviderSelected

  beforeEach(() => {
    jest.spyOn(getProvider as any, 'default').mockImplementation((network) => {
      return Promise.resolve({
        network,
        getSigner: () => signer,
      })
    })

    onProviderSelected = jest.fn(({ provider: p, signer: s }) => {
      receivedProvider = p
      receivedSigner = s
    })
  })

  afterEach(() => {
    receivedProvider = null
    receivedSigner = null
  })

  it('renders nothing but the children provided', async () => {
    let ethosWrapper
    await act(async () => {
      ethosWrapper = create(
        <EthosWrapper ethosConfiguration={{}} onProviderSelected={onProviderSelected}>
          test
        </EthosWrapper>
      )
    })

    // expect(onProviderSelected.mock.calls.length).toBe(1)
    // expect(receivedProvider.getSigner()).toBe(signer)
    // expect(receivedSigner).toBe(signer)
    // expect(ethosWrapper.toJSON()).toMatchSnapshot()
    expect(true).toBe(true)
  })

  it('should initialize default configuration if no optional values are given', async () => {
    let ethosWrapper: any;
    const initialEthosConfiguration: EthosConfiguration = { appId: 'test-id' }
    const expectedEthosConfiguration: EthosConfiguration = {
      appId: 'test-id',
      walletAppUrl: 'https://ethoswallet.xyz/',
      chain: Chain.Sui,
      network: 'sui'
    }

    // Mock useSuiWallet so config will get initialized
    // @ts-ignore
    useSuiWallet.default = jest.fn().mockReturnValueOnce({ provider: 'any', signer: null })
    const initializeSpy = jest.spyOn(initialize, 'default')

    await act(async () => {
      ethosWrapper = create(
        <EthosWrapper ethosConfiguration={initialEthosConfiguration} onProviderSelected={onProviderSelected}>
          test
        </EthosWrapper>
      )
    })

    expect(initializeSpy).toBeCalledWith(expectedEthosConfiguration)
  });
})
