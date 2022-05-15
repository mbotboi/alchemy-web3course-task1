const hre = require('hardhat')
const ethers = hre.ethers

const provider = ethers.provider

async function deploy(){
    const [signer] = await ethers.getSigners()
    console.log('deployer address', await signer.getAddress())

    const MBNFT = await ethers.getContractFactory('MBNFT')
    const mbnft = await MBNFT.deploy({
        maxFeePerGas: ethers.utils.parseUnits('5', 'gwei')
    })
    await mbnft.deployed()    

    console.log('contract address', mbnft.address)
}

deploy()