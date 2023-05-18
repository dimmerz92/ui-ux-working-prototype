CREATE TABLE public.test_users (
    username character varying(319) NOT NULL,
    email character varying(319),
    password character varying(256),
    CONSTRAINT test_users_email_check CHECK (((email)::text ~~ '%__@__%__%'::text))
);

CREATE TABLE public.test_workspaces (
    username character varying(319) NOT NULL,
    document jsonb,
    name character varying(30) NOT NULL
);