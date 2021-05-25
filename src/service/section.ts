import { Section } from "../model";
import { query } from "../utils/db";

const tableName = `tb_section`;

export const querySection = async (): Promise<Array<Section>> => {
  return query(`select * from ${tableName}`);
};

export const insertSection = async (section: Section): Promise<string> => {
  return query(
    `insert into ${tableName} values('${section.id}', '${section.name}', '${
      section.visual ? section.visual : ""
    }')`
  );
};
