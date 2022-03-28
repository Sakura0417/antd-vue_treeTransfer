<template>
  <div class="transfer-wrapper">
    <transfer
      ref="transferRef"
      :edit-key="editKey"
      :tree-data="treeData"
    />
  </div>
  <a-space>
    <a-button
      type="primary"
      @click="getValue"
    >
      获取值1
    </a-button>
    <a-button
      @click="setValue"
    >
      设置值
    </a-button>
    <a-button
      @click="setLeftValue"
    >
      回显
    </a-button>
  </a-space>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'
import Transfer from '@/components/composition-transfer.vue'
import data from '@/assets/data'
import type {TreeDataItem} from '@/types'

interface State {
  /** 组件实例 */
  transferRef: any;
  /** 树数据 */
  treeData: TreeDataItem[];
  /** 编辑 key */
  editKey: string[1];
}

export default defineComponent({
  name: 'Composition',
  components: {
    Transfer
  },
  setup() {
    const state = reactive<State>({
      transferRef: undefined,
      treeData: data.treeData,
      editKey: []
    })

    /**  获取值 */
    function getValue() {
      console.log('获取数据', JSON.stringify(data.treeData).indexOf('监控'))
      console.log('===>', state.transferRef.rightTreeData)
    }

    /** 设置值 */
    function setValue() {
      state.editKey = data.editKey
    }

    function setLeftValue() {
      console.log('state', state)
    }

    return {
      ...toRefs(state),
      setLeftValue,
      getValue,
      setValue
    }
  }
})
</script>

<style lang="less" scoped>
.transfer-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 24px;
  text-align: left;
}
</style>
