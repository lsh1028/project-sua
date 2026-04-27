/** * 작성일: 2026-04-27
 * 작성자: 시스템 (Project Sua)
 * 클래스 설명: Firestore로부터 미션 데이터를 조회하는 서비스 클래스
 */

import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Question, Mission } from '@/types/mission';

export class MissionService {
  /**
   * 특정 컬렉션으로부터 모든 질문 데이터를 가져옵니다.
   * @param missionId 미션 식별자
   * @returns Question 객체 배열
   */
  static async getQuestions(missionId: string): Promise<Question[]> {
    try {
      const q = query(
        collection(db, 'missions', missionId, 'questions'),
        orderBy('questionNumber', 'asc')
      );
      
      const querySnapshot = await getDocs(q);
      const questions: Question[] = [];
      
      querySnapshot.forEach((doc) => {
        questions.push(doc.data() as Question);
      });
      
      return questions;
    } catch (error) {
      console.error("Error fetching questions: ", error);
      throw error;
    }
  }
}