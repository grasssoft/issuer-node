import { CredentialsTabIDs } from "src/domain";

// Literals used more than once
export const ACCESSIBLE_UNTIL = "Accessible until";
export const CLOSE = "Close";
export const CONNECTIONS = "Connections";
export const AUTH = "Authorization";
export const CREDENTIAL_LINK = "Credential link";
export const CREDENTIALS = "Credentials";
export const DELETE = "Delete";
export const DETAILS = "Details";
export const ERROR_MESSAGE = "Something went wrong";
export const EXPIRATION = "Expiration";
export const IDENTIFIER = "Identifier";
export const IMPORT_SCHEMA = "Import schema";
export const ISSUE_CREDENTIAL = "Issue credential";
export const ISSUE_CREDENTIAL_DIRECT = "Issue credential directly";
export const ISSUE_CREDENTIAL_LINK = "Create credential link";
export const ISSUE_DATE = "Issue date";
export const ISSUED = "Issued";
export const ISSUED_CREDENTIALS = "Issued credentials";
export const ISSUER_STATE = "Issuer state";
export const LINKS = "Links";
export const REVOCATION = "Revocation";
export const REVOKE = "Revoke";
export const SCHEMA_HASH = "Schema hash";
export const SCHEMA_TYPE = "Schema type";
export const SCHEMAS = "Schemas";
export const STATUS = "Status";
export const VALUE_REQUIRED = "Value required";

// URL params
export const DID_SEARCH_PARAM = "did";
export const QUERY_SEARCH_PARAM = "query";
export const SCHEMA_SEARCH_PARAM = "schema";
export const STATUS_SEARCH_PARAM = "status";

export const API_VERSION = "v1";

type CredentialsTab = { id: CredentialsTabIDs; tabID: string; title: string };

export const CREDENTIALS_TABS: [CredentialsTab, CredentialsTab] = [
  {
    id: "issued",
    tabID: "issued",
    title: ISSUED,
  },
  {
    id: "links",
    tabID: "links",
    title: LINKS,
  },
];

export const DEBOUNCE_INPUT_TIMEOUT = 500;

export const DOTS_DROPDOWN_WIDTH = 60;

export const FEEDBACK_URL = "https://forms.gle/W8xuqY3UjPnY5Nj16";

export const IMAGE_PLACEHOLDER_PATH = "/images/image-preview.png";

export const POLLING_INTERVAL = 10000;

export const ROOT_PATH = "/";

export const SIDER_WIDTH = 320;

export const TOAST_NOTIFICATION_TIMEOUT = 6;

export const TUTORIALS_URL = "https://0xpolygonid.github.io/tutorials";
//export const AUTH_URL = '{"id":"0978b809-7406-4932-8a9f-b8a20c529073","typ":"application/iden3comm-plain-json","type":"https://iden3-communication.io/authorization/1.0/request","thid":"0978b809-7406-4932-8a9f-b8a20c529073","body":{"callbackUrl":"http://localhost:3002/v1/credentials/links/callback?sessionID=0978b809-7406-4932-8a9f-b8a20c529073","reason":"test flow","scope":[]},"from":"did:nbo:besu:test:4bszAHM67zwBo1Uqx8Q7HmDjWdXKGYQMEXxRHFJmba"}';
export const AUTH_URL =
  "eyJpZCI6IjA5NzhiODA5LTc0MDYtNDkzMi04YTlmLWI4YTIwYzUyOTA3MyIsInR5cCI6ImFwcGxpY2F0aW9uL2lkZW4zY29tbS1wbGFpbi1qc29uIiwidHlwZSI6Imh0dHBzOi8vaWRlbjMtY29tbXVuaWNhdGlvbi5pby9hdXRob3JpemF0aW9uLzEuMC9yZXF1ZXN0IiwidGhpZCI6IjA5NzhiODA5LTc0MDYtNDkzMi04YTlmLWI4YTIwYzUyOTA3MyIsImJvZHkiOnsiY2FsbGJhY2tVcmwiOiJodHRwOi8vbG9jYWxob3N0OjMwMDIvdjEvYXV0aGVudGljYXRpb24vY2FsbGJhY2s/c2Vzc2lvbklkPTA5NzhiODA5LTc0MDYtNDkzMi04YTlmLWI4YTIwYzUyOTA3MyIsInJlYXNvbiI6InRlc3QgZmxvdyIsInNjb3BlIjpbXX0sImZyb20iOiJkaWQ6bmJvOmJlc3U6dGVzdDo0YnN6QUhNNjd6d0JvMVVxeDhRN0htRGpXZFhLR1lRTUVYeFJIRkptYmEifQ==";

export const WALLET_APP_STORE_URL = "https://apps.apple.com/us/app/polygon-id/id1629870183";

export const WALLET_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.polygonid.wallet";
