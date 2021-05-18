import { Section } from "../model";
import { query } from "../utils/db";

const tableName = `tb_section`;

export const querySection = (): Promise<Array<Section>> => {
  return query(`select * from ${tableName}`);
};

export const insertSection = (section: Section): Promise<string> => {
  return query(
    `insert into ${tableName} values(${section.id}, ${section.name}, ${section.src})`
  );
};
