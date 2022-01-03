import sdk from './1-initialize-sdk.mjs'

const bundleDrop = sdk.getBundleDropModule(
  '0x01375308886e11D3D4a7b6f286977121F9961575'
)

;(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory()
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 10_000,
      maxQuantityPerTransaction: 1,
    })

    await bundleDrop.setClaimCondition(0, claimConditionFactory)
    console.log(
      '✅ Successfully set claim condition on bundle drop:',
      bundleDrop.address
    )
  } catch (error) {
    console.error('Failed to set claim condition', error)
  }
})()
