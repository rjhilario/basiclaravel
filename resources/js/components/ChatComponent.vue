<template>
    <div class="container-fluid w-100">
        <div class="row">
            <div class="col-sm-2 namespaces pt-3 pb-3">
                <!-- Namespaces -->
                <ul v-for="(namespace, index) in namespaces" :key="index">
                    <a v-on:click="enterNamespace(namespace)"><li>{{namespace}}</li></a>
                </ul>
            </div>
            <div class="col-sm-2 rooms">
                <h3>Rooms</h3>
                <ul class="room-list">
                </ul>
            </div>
            <div class="chat-panel col-sm-8">
                <div class="room-header row">
                    <div class="col-6"><span class="curr-room-text">Current Room</span> <span class="curr-room-num-users">Users </span></div>
                    <div class="col-6">
                        <div class="col-sm-5 search pull-right">
                            <input type="text" id="search-box" placeholder="Search" />
                            <span class="glyphicon glyphicon-search"></span>
                        </div>
                    </div>
                </div> 
                <div class="message-form">
                    <form id="user-input">
                        <div class="col-sm-12">
                            <input id="user-message" type="text" placeholder="Enter your message" />
                        </div>
                        <!-- <div class="col-sm-2">
                            <input class="btn btn-primary" type="submit" value="send" />
                        </div> -->
                    </form>
                </div>
                <ul id="messages" class="col-sm-12">
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import socketio from 'socket.io-client';
let socket = socketio('http://localhost:3000')

    export default {
        data(){
            return {
                'namespaces': [
                    'PHP',
                    'Laravel',
                    'VueJS'
                ]
            }
        },
        methods: {
            enterNamespace(namespace){
                socketio('http://localhost:3000/' + namespace)
                // console.log(namespace)
                socket.emit('joinNamespace', namespace) 
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
