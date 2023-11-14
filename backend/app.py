from flask import Flask, request
import psycopg2
import json

app = Flask(__name__)



@app.route('/', methods=['GET'])
def hello_world():
    try:
        conn = psycopg2.connect(
            database="postgres",
            user="habrpguser",
            password="123456",
            host="localhost",
            port="5432"
        )
        cur = conn.cursor()

        cur.execute("SELECT * FROM public.orders")  
        rows = cur.fetchall()

        data = []
        for row in rows:
            data.append({
                'id': row[0],
                'id_orders': row[1],
                'name_product': row[2],
                'count': row[3],
                'comment': row[4],
                'table_number': row[5],
                'price': row[6]
            })

        conn.close()
        return json.dumps(data, indent=2, ensure_ascii=False)  # отключаем кодирование в ASCII
    except psycopg2.Error as e:
        return json.dumps({'error': str(e)}, indent=2, ensure_ascii=False)  # обработка ошибок

@app.route('/add_data', methods=['POST'])
def add_data():
    try:
        conn = psycopg2.connect(
            database="postgres",
            user="habrpguser",
            password="123456",
            host="localhost",
            port="5432"
        )
        cur = conn.cursor()
        data = request.get_json()
        cur.execute("INSERT INTO public.orders (id_orders, name_product, count, comment, table_number, price) VALUES (%s, %s, %s, %s, %s, %s)", (data['id_orders'], data['name_product'], data['count'], data['comment'], data['table_number'], data['price']))
        conn.commit()
        conn.close()
        return 'Data added successfully'
    except psycopg2.Error as e:
       print('Error adding data:', e)
       return 'Error adding data: ' + str(e)


@app.route('/update_data/<int:id>', methods=['PUT'])
def update_data(id):
    try:
        conn = psycopg2.connect(
            database="postgres",
            user="habrpguser",
            password="123456",
            host="localhost",
            port="5432"
        )
        cur = conn.cursor()
        data = request.get_json()
        cur.execute("UPDATE public.orders SET id_orders=%s, name_product=%s, count=%s, comment=%s, table_number=%s, price=%s WHERE id=%s", (data['id_orders'], data['name_product'], data['count'], data['comment'], data['table_number'], data['price'], id))
        conn.commit()
        conn.close()
        return 'Data updated successfully'
    except psycopg2.Error as e:
        return 'Error updating data: ' + str(e)


@app.route('/delete_data/<int:id>', methods=['DELETE'])
def delete_data(id):
    try:
        conn = psycopg2.connect(
            database="postgres",
            user="habrpguser",
            password="123456",
            host="localhost",
            port="5432"
        )
        cur = conn.cursor()
        cur.execute("DELETE FROM public.orders WHERE id = %s", (id,))
        conn.commit()
        conn.close()
        return 'Data deleted successfully'
    except psycopg2.Error as e:
        return 'Error deleting data: ' + str(e)

@app.route('/truncate_table', methods=['DELETE'])
def truncate_table():
    try:
        conn = psycopg2.connect(
            database='postgres',
            user='habrpguser',
            password='123456',
            host='localhost',
            port='5432'
        )
        cur = conn.cursor()
        cur.execute("TRUNCATE TABLE public.orders")
        conn.commit()
        conn.close()
        return 'Data truncated successfully'
    except psycopg2.Error as e:
        return 'Error truncating table: ' + str(e)

if __name__ == '__main__':
    app.run()