<template>
    <div  v-if="currentUser!='admin'">抱歉您没有权限</div>
    <div id="admin" v-if="currentUser=='admin'">
        <a-table :columns="columns" :data-source="data">
            <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
                <span>
                <smile-outlined />
                Name
                </span>
            </template>
            </template>

            <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
                <a>
                {{ record.name }}
                </a>
            </template>
            <template v-else-if="column.key === 'tags'">
                <span>
                <a-tag
                    v-for="tag in record.tags"
                    :key="tag"
                    :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
                >
                    {{ tag.toUpperCase() }}
                </a-tag>
                </span>
            </template>
            <template v-else-if="column.key === 'action'">
                <a-button  danger @click="deleteUser(record.id)">Delete</a-button>
            </template>
            </template>
        </a-table>

    </div>
</template>

<script setup>
    import { getAllUserData,deleteUserData } from '@/network/admin';
    import { ref } from 'vue'
    import { useUserStore } from '@/stores/userStore';

    const columns = [
    {
        name: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Password',
        key: 'password',
        dataIndex: 'password',
    },
    {
        title: 'Action',
        key: 'action',
    },
    ];
    const data = ref([])
    const currentUser = useUserStore().currentUser.username;
    console.log(currentUser)

    getAllUserData().then(res=>{
        data.value = res.data
    })

    // 点击删除用户
    async function deleteUser(id){
        await deleteUserData(id);
        window.location.reload();
    }

</script>

<style scoped>

</style>