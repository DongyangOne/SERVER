/**
 * @swagger
 * paths:
 *  /api/board:
 *    post:
 *      description: "게시글 등록 (김인후)"
 *      tags: [Board]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                b_title:
 *                  type: string
 *                b_content:
 *                  type: string
 *      responses:
 *        "200":
 *          description: 게시글 등록 성공
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  result:
 *                    type: boolean   
 *    
 *    get:
 *      description: "목록 조회 (김인후)"
 *      tags: [Board]
 *      responses:
 *        "200":
 *          description: 조회 완료
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  result:
 *                    type: boolean
 *                  data:
 *                    type: array
 *                    example:
 *                      [{b_id, b_title}]
 *
 *  /api/board/b_id:
 *    get:
 *      description: "상세 조회 (김인후)"
 *      tags: [Board]
 *      responses:
 *        "200":
 *          description: 상세 조회 완료
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  result:
 *                    type: boolean
 *                  data:
 *                    type: object
 *                    example:
 *                      {b_id, b_title, b_content, b_writer}
 * 
 *    patch:
 *      description: "게시글 수정 (김인후)"
 *      tags: [Board]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                b_title:
 *                  type: string
 *                b_content:
 *                  type: string
 *      responses:
 *        "200":
 *          description: 게시글 수정 성공
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  result:
 *                    type: boolean 
 * 
 *    delete:
 *      description: "게시글 삭제 (김인후)"
 *      tags: [Board]
 *      responses:
 *        "200":
 *          description: 게시글 삭제 완료
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  result:
 *                    type: boolean
 *                             
 *  /api/board/search/?keyword = [data]:
 *    get:
 *      description: "제목 검색 (김인후)"
 *      tags: [Board]
 *      parameters:
 *          - in: query
 *            name: data
 *            description:
 *            schema:
 *              type: string
 *      responses:
 *        "200":
 *          description: 제목 검색 완료
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  result:
 *                    type: boolean
 *                  data(or message):
 *                    type: array
 *                    example:
 *                      [{b_id, b_title}]
 */