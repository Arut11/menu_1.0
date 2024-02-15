from flask import Flask, request, jsonify
import psycopg2
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#Добавил настройки корс для связи фронт-бэк ниже, если не поможет удалить!
origins = {
    "http://locallhost:3000",
}

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "DELETE", "PUT"],
    allow_headers=["*"],
)

    # получение содержимого заказа
@app.route('/orders/<order_id>', methods=['GET'])
def get_order_items(order_id):
    try:
        conn = psycopg2.connect(
            database="postgres",
            user="habrpguser",
            password="123456",
            host="localhost",
            port="5432"
        )
        cur = conn.cursor()
        cur.execute('SELECT dish.dish_name, order_item.quantity, dish.price FROM order_item JOIN dish ON order_item.dish_id = dish.dish_id WHERE order_item.order_id = %s', (order_id,))
        rows = cur.fetchall()
        data = []
        for row in rows:
            data.append({
                'dish_name': row[0],
                'quantity': row[1],
                'price': str(row[2])
            })

        conn.close()
        return json.dumps(data, indent=2, ensure_ascii=False)
    except psycopg2.Error as e:
        return json.dumps({'error': str(e)}, indent=2, ensure_ascii=False)




                                               # добавление или обновление позиции в заказе
@app.route('/orders/<order_id>', methods=['PUT', 'POST'])
def update_order_item(order_id):
    try:
        conn = psycopg2.connect(
            database="postgres",
            user="habrpguser",
            password="123456",
            host="localhost",
            port="5432"
        )
        cursor = conn.cursor()

 # Получение параметров из запроса
        dish_id = request.json['dish_id']
        quantity = request.json['quantity']
        price = request.json['price']

        # Получение order_item_id по order_id и dish_id
        cursor.execute("SELECT order_item_id FROM order_item WHERE order_id = %s AND dish_id = %s", (order_id, dish_id))
        order_item_id = cursor.fetchone()

        if order_item_id:
            # Обновление существующей позиции заказа
            cursor.execute("UPDATE order_item SET quantity = %s WHERE order_item_id = %s", (quantity, order_item_id))
            conn.commit()
            return jsonify({"message": "Позиция заказа обновлена"})

        else:
            # Добавление новой позиции заказа
            # Получение dish_id по dish_id
            cursor.execute("SELECT dish_id FROM dish WHERE dish_id = %s", (dish_id,))
            dish_id = cursor.fetchone()

            if dish_id:
                # Добавление новой позиции заказа
                cursor.execute("INSERT INTO order_item (order_id, dish_id, quantity) VALUES (%s, %s, %s)", (order_id, dish_id, quantity))
                conn.commit()
                return jsonify({"message": "Позиция заказа добавлена"})

            else:
                return jsonify({"error": "Блюдо с таким названием не найдено"})

    except (Exception, psycopg2.Error) as error:
        print(error)
        return jsonify({"error": "Ошибка при обновлении или добавлении позиции заказа"})

    finally:
        if conn:
            cursor.close()
            conn.close()




                                         # удаление позиции из заказа
@app.route('/orders/<order_id>/<dish_id>', methods=['DELETE'])
def delete_order_item(order_id, dish_id):
    try:
        conn = psycopg2.connect(
            database="postgres",
            user="habrpguser",
            password="123456",
            host="localhost",
            port="5432"
        )
        cur = conn.cursor()

        cur.execute('DELETE FROM order_item WHERE order_id = %s AND dish_id = %s', (order_id, dish_id))
        conn.commit()
        conn.close()
        return json.dumps({'success': True}, indent=2, ensure_ascii=False)
    except psycopg2.Error as e:
        return json.dumps({'error': str(e)}, indent=2, ensure_ascii=False)



                                           # создание нового заказа
@app.route('/orders', methods=['POST'])
def create_order():
    try:
        conn = psycopg2.connect(
            database="postgres",
            user="habrpguser",
            password="123456",
            host="localhost",
            port="5432"
        )
        cur = conn.cursor()

        # Создаем новый заказ
        table_number = request.json['table_number']
        cur.execute('INSERT INTO orders (table_number, order_status) VALUES (%s, %s) RETURNING order_id', (table_number, 'pending'))
        order_id = cur.fetchone()[0]

        # Добавляем позиции в заказ
        items = request.json['items']
        for item in items:
            dish_id = item['dish_id']
            quantity = item['quantity']

            cur.execute('INSERT INTO order_item (order_id, dish_id, quantity) VALUES (%s, %s, %s)',
                        (order_id, dish_id, quantity))

        conn.commit()
        conn.close()
        return json.dumps({'success': True}, indent=2, ensure_ascii=False)
    except psycopg2.Error as e:
        return json.dumps({'error': str(e)}, indent=2, ensure_ascii=False)
if __name__ == '__main__':
    app.run()
















































