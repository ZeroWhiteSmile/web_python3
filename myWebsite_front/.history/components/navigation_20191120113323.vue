<template>
   <Menu :theme="dark">
      <Submenu name="1">
          <template slot="title">
              <Icon type="ios-paper" />
              echarts实例子
          </template>
          <MenuItem name="1-1">文章管理</MenuItem>
          <MenuItem name="1-2">评论管理</MenuItem>
          <MenuItem name="1-3">举报管理</MenuItem>
      </Submenu>
   </Menu>
</template>