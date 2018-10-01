CREATE TABLE tb_user (
  id         SERIAL NOT NULL,
  name       VARCHAR(100),
  CONSTRAINT pk_user PRIMARY KEY (id)
);