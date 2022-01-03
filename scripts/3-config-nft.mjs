import sdk from './1-initialize-sdk.mjs'
import { readFileSync } from 'fs'

const bundleDrop = sdk.getBundleDropModule(
  '0x01375308886e11D3D4a7b6f286977121F9961575'
)

;(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: 'Hololens',
        description: 'This NFT will give you access to MetaverseDAO!',
        image: readFileSync('scripts/assets/nft.jpg'),
      },
    ])
    console.log('✅ Successfully created a new NFT in the drop!')
  } catch (error) {
    console.error('failed to create the new NFT', error)
  }
})()
