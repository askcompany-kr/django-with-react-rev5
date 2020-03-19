from .common import *

STATICFILES_STORAGE = "backend.storages.StaticAzureStorage"
DEFAULT_FILE_STORAGE = "backend.storages.MediaAzureStorage"

AZURE_ACCOUNT_NAME = os.environ["AZURE_ACCOUNT_NAME"]
AZURE_ACCOUNT_KEY = os.environ["AZURE_ACCOUNT_KEY"]

# 절대 이렇게 소스코드에 키를 넣지 마세요.
# 아래 키는 예제로 넣었으며, 동작하지 않는 키입니다.
# AZURE_ACCOUNT_NAME = "educastaskcompany"
# AZURE_ACCOUNT_KEY = "nqWEdPMfsjFBoeU184HBnTsoaw4Tqyf0dWdhBtzM1k6jS9clFEHdxCoayvHhnI6LsNEdOC8erjBccyFKmHLGxQ=="
