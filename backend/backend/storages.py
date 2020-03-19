from storages.backends.azure_storage import AzureStorage


class StaticAzureStorage(AzureStorage):
    azure_container = "static"


class MediaAzureStorage(AzureStorage):
    azure_container = "media"
