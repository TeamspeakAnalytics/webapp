/**
 * TeamspeakAnalytics - REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface GetServerGroupListInfo {
  id?: number;
  name?: string;
  serverGroupType?: ServerGroupType;
  iconId?: number;
  saveDb?: number;
  sortId?: number;
  namingMode?: number;
  neededModifyPower?: number;
  neededMemberAddPower?: number;
  neededMemberRemovePower?: number;
}

export enum ServerGroupType {
  NUMBER_0 = 0,
  NUMBER_1 = 1,
  NUMBER_2 = 2
}