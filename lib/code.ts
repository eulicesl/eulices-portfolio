export const novaFallbackSnippet = {
  code: `function getAIProviderStatus(
  aiProvider: { provider?: AIProvider } | undefined,
  ollamaConnectStatus: ConnectStatus,
  fmIsAvailable: boolean,
) {
  const selectedProvider = aiProvider?.provider ?? AIProvider.FOUNDATION_MODELS;
  const isFoundationModelsSelected = selectedProvider === AIProvider.FOUNDATION_MODELS;
  const isFoundationModelsUsable = isFoundationModelsSelected && fmIsAvailable;

  const effectiveProvider = isFoundationModelsUsable
    ? AIProvider.FOUNDATION_MODELS
    : AIProvider.OLLAMA;

  const isFallbackActive =
    isFoundationModelsSelected &&
    !fmIsAvailable &&
    ollamaConnectStatus === ConnectStatus.SUCCESSFUL;

  return { selectedProvider, effectiveProvider, isFallbackActive };
}`,
  lang: "typescript",
  fileName: "hooks/use-ai.ts",
  note: "Source private — full file shared in interviews.",
} as const;
