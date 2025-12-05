import { getNotionRecordMap } from "../common";

/**
 * Notion에서 Work의 RecordMap을 가져오는 함수
 */
export const getWorkRecordMap = async (
  workId: string,
  revalidateSeconds: number = 3600
) => {
  return getNotionRecordMap(
    workId,
    `notion-work-recordmap-${workId}`,
    revalidateSeconds
  );
};
