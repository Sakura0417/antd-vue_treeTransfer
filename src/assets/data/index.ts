import type {TreeDataItem} from '@/types'

interface Data {
  treeData: TreeDataItem[];
  editKey: string[];
}

const data: Data = {
  treeData: [
    {
      id: '1',
      parentId: '0',
      key: '1',
      title: '工作台-0'
    },
    {
      id: 2,
      parentId: 0,
      key: '2',
      title: '仪表盘-2',
      children: [
        {
          id: 3,
          parentId: 2,
          key: '3',
          title: '欢迎页-3'
        },
        {
          id: 4,
          parentId: 2,
          key: '4',
          title: '分析页-4'
        },
        {
          id: 5,
          parentId: 2,
          key: '5',
          title: '监控页-5'
        }
      ]
    },
    {
      id: 6,
      parentId: 0,
      key: '6',
      title: '表单页-6',
      children: [
        {
          id: 7,
          parentId: 6,
          key: '7',
          title: '基础表单-7'
        },
        {
          id: 8,
          parentId: 6,
          key: '8',
          title: '分步表单-8'
        },
        {
          id: 9,
          parentId: 6,
          key: '9',
          title: '高级表单-9'
        }
      ]
    }
  ],
  editKey: ['6', '7', '8', '9']
}

export default data
