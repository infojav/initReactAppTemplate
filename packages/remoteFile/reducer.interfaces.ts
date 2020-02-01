export interface RemoteFileState {
    url: string,
    data: object,
    isLoading: boolean,
    loadSuccess: boolean,
    loadError: Error | null
}